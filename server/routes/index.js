var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: 'hello'});
});

router.get('/resume', function(req, res, next) {
  res.redirect('/static/resume.pdf')
})

router.post('/email', function(req, res, next) {
  const { firstname, lastname, email, text } = (req.body)

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${firstname} ${lastname}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    ${text}
  `

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'Contact from Portfolio Site',
    html: output
  }

  console.log(mailOptions, output)
 
  transporter.sendMail(mailOptions, function(error, info) {
      if(error) {
          res.send({message: error})
      } else {
          res.send('email sent ' + info.response)
      }
  }) 
 

})

module.exports = router;
