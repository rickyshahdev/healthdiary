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
        <div className='newEvent'>
          <h2 className='newEventTitle'>Add Event</h2>
          <form onSubmit={this.createEvent}>
            <input onChange={this.changeEventTitle} type="text" placeholder="Title"/><br/>
            <input onChange={this.changeEventDate} type="date"/><br/>
            <input onChange={this.changeEventImage} type="text" placeholder="Image Link"/><br/>
            <textarea onChange={this.changeEventDescription}  placeholder="Description"/><br/>

            <input type="submit" value="ADD EVENT"/>
          </form>
        </div>
        <div className='eventsDiv'>
          <h2 className="eventsTitle"> List of Events </h2>
          <ul>
            {
              this.state.diary.map(
                (entry) => {
                  return <li className= "eventCard" key={entry.id} >
                  <div className='left'>
                    <img className= "img"  src={entry.image} alt={entry.title}/>
                  </div>
                  <div className='right'>
                    <div>
                      <div className='eventTitle'><h3>{entry.title}</h3><h4 className='date'>{entry.date}</h4></div>
                      <h4 className='descTitle'>Description:</h4>
                      <p className='description'>{entry.description}</p>
                    </div>
                    <details>
                    <summary>EDIT EVENT</summary>
                      <form id={entry.id} onSubmit={this.updatePost}>
                         <input onChange={this.changeUpdateTitle} type="text" placeholder="New Title"/>
                         <br/>
                         <input onChange={this.changeUpdateDate} type="date"/>
                         <br/>
                         <input onChange={this.changeUpdateImage} type='text'/>
                         <br/>
                         <input onChange={this.changeUpdateDescription} type="textarea" placeholder="Description"/>
                         <br/>
                        <input type="submit" value="UPDATE ENTRY"/>
                      </form>
                      <br/>
                      <button value={entry.id} onClick={this.deletePost}>DELETE EVENT</button>
                    </details>
                  </div>
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
