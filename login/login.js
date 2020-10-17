class Login extends React.Component{
  state ={
    people: []
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
    <form onSubmit={this.getPeople} >
      <input type="text" placeholder="username"/><br/>
      <input type="text" placeholder="password"/><br/>
      <input type="submit" value="Sign In"/>
    </form>
    </div>
  )
}

}

ReactDOM.render(
  <Login />,
  document.querySelector('main')
);
