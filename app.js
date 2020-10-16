


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
      image: this.state.newEventimage
    }).then(
      (response) => {
          this.setState({
              diary: response.data
        })
      })
}
    render = () => {
        return <div>
            <h2>Add Event</h2>
            <form onSubmit={this.createEvent}>
                <input onKeyUp={this.changeEventTitle} type="text" placeholder="Title"/><br/>
                <input onKeyUp={this.changeEventDate} type="datetime" placeholder="eg: 2020-08-14 06:30:15"/><br/>
                <input onKeyUp={this.changeEventDescription} type="text" placeholder="Description"/><br/>
                <input onKeyUp={this.changeEventImage} type="text" placeholder="image link"/><br/>
                <input type="submit" value="Add Event"/>
            </form>
            <h2> List of Events </h2>
            <ul>
              {
                this.state.diary.map(
                  (event) => {
                    return <li>
                    <img className= "img"src={event.image} alt="image"/>
                    <h5> Title: {event.title}</h5>
                    <h5> Date : {event.date} </h5>
                    <h5> Description: {event.description}</h5>

                    </li>
                  }
                )
              }
            </ul>
        </div>
    }

}
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
