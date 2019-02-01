"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;

var _mailchimpApiV = _interopRequireDefault(require("mailchimp-api-v3"));

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const mailchimp = new _mailchimpApiV.default(process.env.MAILCHIMP_API);

async function handler(event, context, callback) {
  console.log('ok');
  const data = JSON.parse(event.body);
  const email = data.email;
  const emailHash = (0, _md.default)(email);
  await mailchimp.put(`/lists/872c00aa85/membres/${emailHash}`, {
    email_address: email,
    status: 'subscribed'
  });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: `📩 Votre e-mail ${email} a bien été enregistré`
    })
  });
}