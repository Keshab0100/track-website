const nodemailer = require("nodemailer");
const cronjob = require("node-cron");

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error("failed to create a testing account " + err.message);
    return process.exit(1);
  } else {
    console.log("credentials obtained, sending mesg...");
    createTransporter(account);
  }
});

const createTransporter = (userEtherealData) => {
  let transporter = nodemailer.createTransport({
    host: userEtherealData.smtp.host,
    port: userEtherealData.smtp.port,
    secure: userEtherealData.smtp.secure,
    auth: {
      user: userEtherealData.user,
      pass: userEtherealData.pass,
    },
  });
  structureMailOption(transporter);
};

const structureMailOption = (transporter) => {
  let mailOption = {
    from: "keshab0121@gmail.com",
    to: "palak@gmail.com",
    subject: "using nodemailer",
    text: "hello user",
    html: `<h2>Content to be sent to the volunteer</h2>`,
  };
  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(info.messageId);
      console.log(nodemailer.getTestMessageUrl(info));
    }
  });
};