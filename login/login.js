class Login extends React.Component{
  state ={
    people: []
  }
  // componentDidMount = () => {
  //     axios.get('/users').then(
  //       (response) => {
  //        this.setState ({
  //          people: response.data
  //        })
  //     })
  //   }
  changeUserName = (event) => {
  this.setState ({
    newUserName: event.target.value
  })
}

   changePassword = (event) => {
       this.setState({
           newPassword:event.target.value
       })
   }
  getPeople = () => {
    axios.get('/users').then((response) => {
        this.setState({
        people: response.data
      })
    })
}

render = () => {
  return(
    <div>
    <ul>
         {
         this.state.people.map(
             (person) => {
               return
             }
         )
         }
          </ul>
         <form action="/diary/index.html"onSubmit={this.getPeople}>
           <input onKeyUp={this.changeUserName} type="text" required={true} placeholder="username"/><br/>
           <input onKeyUp={this.changePassword} required={true} type="text"placeholder="password"/><br/>
           <input type="submit" value="Log In"/>
         </form>

   </div>
      )
    }
}

ReactDOM.render(
  <Login />,
  document.querySelector('main')
);
