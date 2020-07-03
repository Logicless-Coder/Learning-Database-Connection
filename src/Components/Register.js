import React, { Component } from "react";

const createUser = () => {
  console.log(this.state.email);
  console.log(this.state.password);
};

const handleEmailChange = (event) => {
  this.setState({
    email: event.target.value,
  });
};

const handlePasswordChange = (event) => {
  this.setState({
    password: event.target.value,
  });
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={this.state.email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={handlePasswordChange}
          />
          <input type="submit" onClick={createUser} />
        </form>
      </div>
    );
  }
}

export default Register;
