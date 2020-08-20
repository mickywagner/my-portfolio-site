var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        password: process.env.EMAIL_PASS
    }
})

function emailMe(email, subject) {
    console.log('inside this statement')
    

    console.log(mailOptions)
    
    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            return console.log(error)
        } else {
            return console.log('email sent: ' + info.response)
        }
    }) 
}



