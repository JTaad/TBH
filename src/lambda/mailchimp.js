import Mailchimp from 'mailchimp-api-v3'
import md5 from 'md5'

const mailchimp = new Mailchimp('5ee62a5b72056875082e791847412359-us10')


export async function handler (event, context, callback) {
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