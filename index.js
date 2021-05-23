require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.use(express.static("public"));
app.use(express.json());

const serve_html = `${__dirname}/public/`;

app.get("/", (req, res) => {
  res.sendFile(serve_html + "index.html");
});

app.post("/sendemail", (req, res) => {
  const { name, email, message } = req.body;
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@mtnetcode.com",
      pass: process.env.EMAIL_PW,
    },
  });
  let emailData = {
    from: "info@mtnetcode.com",
    to: "info@mtnetcode.com",
    subject: `New message from ${email}`,
    html: `New message from ${email} (${name})<br>Text: ${message}`,
  };
  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      res.json({ msg: "Something went wrong on our side" });
    } else {
      res.json({
        msg: `Thank you ${name}! <br> Your message has been successfully sent.`,
      });
    }
  });
});

const PORT = 3334 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
