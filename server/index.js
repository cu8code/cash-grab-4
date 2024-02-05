const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Configure nodemailer to use Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '8ankanroy@gmail.com', // Replace with your Gmail address
    pass: 'exjy ahnv xpnl imfb' // Replace with your Gmail password or App password if 2FA is enabled
  }
});

// Define the email options
const mailOptions = {
  from: '8ankanroy@gmail.com', // Replace with your Gmail address
  to: 'social8ankanroy@gmail.com', // Replace with the recipient's email address
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from a Node.js app using Nodemailer and Express.js!',
  html: '<p>This is a test email sent from a <strong>Node.js</strong> app using Nodemailer and Express.js!</p>'
};

// Route to send email
app.get('/sendemail', (req, res) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email: ' + error.message);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent: ' + info.response);
    }
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
