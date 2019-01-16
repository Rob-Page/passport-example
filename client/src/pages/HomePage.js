import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Jumbotron>
        <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
        <p className="lead">Welcome to your new home page</p>
        <hr className="my-2" />
        <p>This home page is a test to see if you can log in, and access your user information like:
        <br/>id: {this.props.user._id}
        <br/>name: {this.props.user.first_name} {this.props.user.last_name}
        <br/>email: {this.props.user.email}
        </p>
      </Jumbotron>

      </div>
    );
  }
}

export default HomePage;

