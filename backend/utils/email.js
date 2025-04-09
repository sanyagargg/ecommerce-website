//Sends email notifications, this is where nodemailer will go
//Handles sending the email to the admin and a confirmation to the user, with optional file attachment

const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const sendEmail = async (data) => {
  const { name, email, phone, companyName, companyAddress, state, country, description, file } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const attachments = [];

  if (file) {
    const filePath = path.join(__dirname, '..', 'uploads', file);
    if (fs.existsSync(filePath)) {
      attachments.push({
        filename: file,
        path: filePath
      });
    }
  }

  const mailOptions = {
    from: `"Charismatic Electronics" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    cc: process.env.EMAIL_CC || '',
    bcc: process.env.EMAIL_BCC || '',
    subject: `New Design Form Submission from ${name}`,
    html: `
      <h2>New Design Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Address:</strong> ${companyAddress}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Description:</strong></p>
      <p>${description}</p>
    `,
    attachments
  };

  await transporter.sendMail(mailOptions);

  if (email) {
    await transporter.sendMail({
      from: `"Charismatic Electronics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've received your new design request!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. We’ve received your design request and our team will get back to you shortly.</p>
        <p>Best regards,<br/>Charismatic Electronics Team</p>
      `
    });
  }
};

module.exports = sendEmail;
