class Login extends React.Component{
  state ={
    people: []
  }
  getPeople = () => {
    console.log(this.state);

    axios.get('/users').then((response) => {
        this.setState({
        people: response.data
      })
    })
}

render = () => {
  return(
    <div>
    <form action="/index.html" onSubmit={this.getPeople} method="POST">
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
