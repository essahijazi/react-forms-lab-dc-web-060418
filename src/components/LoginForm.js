import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }


  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.onSubmit(event)
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>
            Username
            <input onChange={this.onChangeHandler} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onChangeHandler} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
