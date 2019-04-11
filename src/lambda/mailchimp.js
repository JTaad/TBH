const Mailchimp = require('mailchimp-api-v3')
const md5 = require ('md5')
require('dotenv').config()
alert('ok')
console.log('1ok')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API)


export async function handler(event, context, callback) {
    console.log('ok')
    const data = JSON.parse(event.body)
    const email = data.email
    const emailHash = md5(email)

    await mailchimp.put(
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