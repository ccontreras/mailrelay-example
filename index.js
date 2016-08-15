const API_KEY = '...';
const API_URL = '...';

let request = require('superagent');

let receipts = [
    {
        name: 'Daniel Quezada',
        email: 'daniel.quezada@linom.com.do'
    },
    {
        name: 'Cesar Contreras',
        email: 'cesar.Contreras@linom.com.do'
    },
];

/**
 * Sends an email.
 *
 * @param   {Array}   receipts   An array of params to be sent.
 * @param   {String}  subject    The subject.
 * @param   {String}  html       The email content.
 */
function sendMail (receipts, subject, html) {
    let params = {
        'function': 'sendMail',
        apiKey: API_KEY,
        emails: receipts,
        subject: subject,
        html: html,
        mailboxFromId: 1,
        mailboxReplyId: 1,
        mailboxReportId: 1,
        packageId: 6,
    };

    request
        .post(API_URL)
        .send(params)
        .end((err, res) => {
            if (err) {
                console.log(err.response.text);
                return;
            }

            console.log(res.text);
        });
}

let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

        <p>
            hello world!
        </p>

    </body>
    </html>
`;

sendMail(receipts, 'Testing', html);
