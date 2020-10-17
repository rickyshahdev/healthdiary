class App extends React.Component {
  state= {
    diary: []
  }

  componentDidMount = () => {
    axios.get('/healthdir').then(
      (response) => {
       this.setState ({
         diary: response.data
       })
    })
  }

  changeEventTitle = (event) => {
    this.setState({
        newEventTitle:event.target.value
    })
  }

  changeEventDate = (event) => {
    this.setState({
        newEventDate:event.target.value
    })
  }

  changeEventDescription = (event) => {
    this.setState({
        newEventDescription:event.target.value
    })
  }

  changeEventImage = (event) => {
    this.setState({
        newEventImage:event.target.value
    })
  }

  createEvent = (event) => {
    event.preventDefault();
    axios.post('/healthdir',
    {
      title: this.state.newEventTitle,
      date: this.state.newEventDate,
      description: this.state.newEventDescription,
      image: this.state.newEventImage
    }).then(
      (response) => {
        this.setState({
          diary: response.data
        })
      })
  }

  //update functions
  changeUpdateTitle = (event) => {
    this.setState({
      updateTitle: event.target.value
    })
  }

  changeUpdateDate = (event) => {
    this.setState({
      updateDate: event.target.value
    })
  }

  changeUpdateImage = (event) => {
    this.setState({
      updateImage: event.target.value
    })
  }

  changeUpdateDescription = (event) => {
    this.setState({
      updateDescription: event.target.value
    })
  }

  updatePost = (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('id');
    axios.put(
      '/healthdir/' + id,
      {
        title: this.state.updateTitle,
        date: this.state.updateDate,
        image: this.state.updateImage,
        description: this.state.updateDescription
      }
    ).then((response) => {
      this.setState({
        diary: response.data
      })
    })
  }


  //delete function
  deletePost = () => {
    axios.delete('/healthdir/' + event.target.value).then(
      (response) => {
        this.setState({
          diary: response.data
        })
      }
    )
  }


  render = () => {
      return <div>
        <div className='new-event'>
          <h2>Add Event</h2>
          <form onSubmit={this.createEvent}>
            <input onKeyUp={this.changeEventTitle} type="text" placeholder="Title"/><br/>
            <input onKeyUp={this.changeEventDate} type="date"/><br/>
            <input onKeyUp={this.changeEventImage} type="text" placeholder="image link"/><br/>
            <input onKeyUp={this.changeEventDescription} type="textarea" placeholder="Description"/><br/>

            <input type="submit" value="Add Event"/>
          </form>
        </div>
        <div className='list-events'>
          <h2> List of Events </h2>
          <ul>
            {
              this.state.diary.map(
                (entry) => {
                  return <li key={entry.id}>
                  <img className= "img"  src={entry.image} alt={entry.title}/>
                  <div>
                    <div>
                      <h5>Title: {entry.title}</h5>
                      <h5>Date: {entry.date}</h5>
                      <h5>Description: {entry.description}</h5>
                    </div>
                    <details>
                    <summary>Edit Event</summary>
                      <form id={entry.id} onSubmit={this.updatePost}>
                         <input onKeyUp={this.changeUpdateTitle} type="text" placeholder="New Title"/>
                         <br/>
                         <input onKeyUp={this.changeUpdateDate} type="date"/>
                         <br/>
                         <input onKeyUp={this.changeUpdateImage} type='text'/>
                         <br/>
                         <input onKeyUp={this.changeUpdateDescription} type="textarea" placeholder="Description"/>
                         <br/>
                        <input type="submit" value="Update Entry"/>
                      </form>
                    </details>
                  </div>
                  <br/>
                  <button value={entry.id} onClick={this.deletePost}>Delete Entry</button>
                  </li>
                }
              )
            }
          </ul>
        </div>
      </div>
  }

}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
