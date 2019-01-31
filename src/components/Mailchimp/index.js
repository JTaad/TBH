import React, { Component } from 'react';


class Mailchimp extends Component {

  state = {
    email: '',
    msg: ''
  }

  handleChange = e => {
    const email = e.target.value
    this.setState({ email })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const email = this.state.email

    const mailchimp = await fetch('/.netlify/functions/mailchimp', {
      method: 'POST',
      body: JSON.stringify({ email })
    })

    const res = await mailchimp.json()
    const msg = res.msg

    this.setState({ msg })
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor='email'>Email: </label>
        <input id='email' type='email' value={this.state.email} onChange={this.handleChange} />
        <button type='submit'>Go</button>
        <p>{this.state.msg}</p>
      </form>
    )
  }

}

export default Mailchimp