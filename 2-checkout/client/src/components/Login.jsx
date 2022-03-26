import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
      name: '',
      email: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    this.setState(
      {name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      isDisplayed: !this.state.isDisplayed}
      );
  }

  render() {
    let isDisplayed = this.state.isDisplayed;
    let output;
    if (!isDisplayed) {
      output =
        <form onSubmit={this.onSubmit}>
          Name:
          <input type="text" placeholder="ex: John Doe"></input>
          Email:
          <input type="text" placeholder="ex: johndoe@gmail.com "></input>
          Password:
          <input type="text" placeholder="ex: @1*!45TM**R"></input>
          <input type="submit" value="login" />
        </form>
    } else {
      output =
        <div>
          Thank you for logging in {this.state.name}
        </div>
    }

    return(
      <div>
        <h2>Login</h2>
        {output}
      </div>
    )
  }
}

export default Login;