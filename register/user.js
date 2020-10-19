class User extends React.Component {
 state={
   people: []
 }

  changeNewUserName = (event) => {
    this.setState ({
      newUsername: event.target.value
    })
  }

    changeNewPassword = (event) => {
        this.setState({
            newPassword:event.target.value
        })
    }
    createUser = (event) => {
        // event.preventDefault();
      axios.post('/users',
        {
          username:this.state.newUsername,
          password: this.state.newPassword
        }).then(
          (response) => {
            {this.setState({
              people: response.data
            })}

        })
    }

  render= () => {
     return <div>

       <h2>Please Sign up</h2>
     <form action="/login/signin.html" method="POST"onSubmit={this.createUser}>
         <input onKeyUp={this.changeNewUserName} type="text" required={true} placeholder="username"/><br/>
         <input onKeyUp={this.changeNewPassword}type="text" required={true} placeholder="password"/><br/>
         <input type="submit" value="Sign up"/>
         </form>
     </div>

  }
}

ReactDOM.render(
    <User></User>,
    document.querySelector('main')
);
