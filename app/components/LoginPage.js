import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className = 'create-user-controls'>
        <input placeholder='please enter e-mail'/>
        <input placeholder='please enter password'/>
        <button className = 'login-submit'>Login</button>
      </section>

    )
  }
}
