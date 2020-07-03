import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  createUser = () => {};

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input type="submit" onClick={this.createUser} />
        </form>
      </div>
    );
  }
}

export default Register;
