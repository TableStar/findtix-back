const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "afrasuperblack@gmail.com",
    pass: "omfqopygusffftzk",
  },
  tls: { rejectUnauthorized: false },
});

module.exports = transporter;
