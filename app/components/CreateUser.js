import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  addNewUser(e) {
    const { name, email, password } = this.state;
    fetch('/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    .then((resp) => {
      resp.status !== 200 ?
        alert('User already exists, please login') :
        this.changeRoute(email, password)
    })

    .catch((error) => {
      console.log(error, 'user already exists')
    })
  }

  verifyInputFields(e){
    e.preventDefault()
    const { name, email, password } = this.state;
    if(name === '' || email === '' || password === ''){
        return alert('Please fill out all fields')
    } else if(!this.validateEmail(email)){
        return alert('Please enter a valid email address')
    } else {
      this.addNewUser(e)
    }
  }

  validateEmail(email) {
    const validated = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return validated.test(email);
  }

  getUserIdFromCreatAccount(email, password){
    const { handleSubmit } = this.props

    fetch('/api/users',{
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body:JSON.stringify({ email, password })
    })
    .then((resp)=> resp.json())
    .then((user) => handleSubmit(user.data))
  }

  changeRoute(email, password){
    const { history } = this.props

    history.replace('/')
    this.getUserIdFromCreatAccount(email, password)
  }

  render() {
    return (
      <form className = 'create-user-controls'>
        <input type='text'
               value={this.state.name}
               placeholder='please enter name'
               onChange={(e) => {
                 this.setState({ name: e.target.value })}}
        />

        <input type='text'
               value={this.state.email}
               placeholder='please enter email'
               onChange={(e) => {
                 this.setState({ email: e.target.value.toLowerCase() })}}
        />

        <input type='password'
               value={this.state.password}
               placeholder='please enter password'
               onChange={(e) => {
                 this.setState({ password: e.target.value })}}
        />

        <button className = 'login-submit'
                onClick={(e) => {
                  this.verifyInputFields(e)
        }}>
          Create
        </button>
      </form>
    )
  }
}
