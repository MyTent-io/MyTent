import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { login } from '../pages/auth/auth';
import './Login.css'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    message: ''
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: ''
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        console.log(data)
        this.props.setUser(data);
        this.props.history.push('/myprofile');
      }
    });
  };

  render() {
    return (
      <>
      <div className="logContainer">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label  htmlFor='username'>Username: </Form.Label>
            <Form.Control
              style={{height:"60px"}}
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{width: "400px"}} htmlFor='password'>Password: </Form.Label>
            <Form.Control
              style={{height:"60px"}}
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
            />
          </Form.Group>
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          <button className="logButton" type='submit'>Login</button>
          {/* <Button type='submit'>Login</Button> */}
        </Form>
        </div>
      </>
    );
  }
}