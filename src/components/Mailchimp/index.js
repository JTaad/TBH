import React, { Component } from 'react';


class Mailchimp extends Component {

  state = {
    email: '',
    msg: '',
    loading: false 
  }

  handleChange = e => {
    const email = e.target.value
    this.setState({ email })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true })
    const email = this.state.email

    const mailchimp = await fetch('/.netlify/functions/mailchimp', {
      method: 'POST',
      body: JSON.stringify({ email })
    })

    const res = await mailchimp.json()
    const msg = res.msg

    this.setState({ 
      msg,
      loading: false
     })
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit} >
       <h4>Newsletter</h4>
          <div className="field has-addons">
            <div className="control" style={{width: "100%"}}>
              <input 
              id="email" 
              className="input is-medium is-radiusless"
              type="email" 
              placeholder="Votre adresse e-mail" 
              onFocus={(e) => e.target.placeholder = ""}  
              onBlur={(e) => e.target.placeholder ="Votre adresse e-mail" } 
              onChange={this.handleChange} 
              value={this.state.email}  />
            </div>
            <div className="control">
              <button style={{height: '100%', fontFamily: 'Poppins', textTransform: 'uppercase'}} className="button   is-primary is-inverted is-outlined is-radiusless is-medium">
                S'inscrire
              </button>
            </div>
          </div>
            <p style={{fontWeight: 'bold'}}>{ this.state.loading ? 'Traitement en cours...' : this.state.msg }</p>
      </form>
    )
  }

}

export default Mailchimp