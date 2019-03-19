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
          <div className="field has-addons">
            <div className="control" style={{width: "100%"}}>
              <input id="email" className="input is-medium is-radiusless" type="email" placeholder="Votre adresse e-mail" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="control">
              <button className="button   is-primary is-inverted is-outlined is-radiusless is-medium">
                S'inscrire
              </button>
            </div>
            <p>{this.state.msg}</p>
          </div>
      </form>
    )
  }

}

export default Mailchimp