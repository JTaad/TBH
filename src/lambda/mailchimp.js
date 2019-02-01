const Mailchimp = require('mailchimp-api-v3')
const md5 = require ('md5')
require('dotenv').config()

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API)


exports.handler = function(event, context, callback) {
    console.log('ok')
    const data = JSON.parse(event.body)
    const email = data.email
    const emailHash = md5(email)

    mailchimp.put(
        `/lists/872c00aa85/membres/${emailHash}`,
        {
            email_address: email,
            status: 'subscribed'
        }
    )

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({msg:  `📩 Votre e-mail ${email} a bien été enregistré` })
    })
  }