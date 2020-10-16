


class App extends React.Component {
  state= {
    diary: []
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

createEvent = (event) => {
    event.preventDefault();
    axios.post('/healthdir',
    {
      title: this.state.newEventTitle,
      date: this.state.newEventDate,
      description: this.state.newEventDescription
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
                <input type="submit" value="Add Event"/>
            </form>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
