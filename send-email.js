const core = require('@actions/core');
const nodemailer = require('nodemailer');

(async () => {
  try {
    const to = core.getInput('to');
    const subject = core.getInput('subject');
    const body = core.getInput('body');
    const smtpHost = core.getInput('smtp_host');
    const smtpPort = core.getInput('smtp_port');
    const smtpUser = core.getInput('smtp_user');
    const smtpPass = core.getInput('smtp_pass');

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to,
      subject,
      html: body,
    });

    console.log('Email sent successfully!');
  } catch (error) {
    core.setFailed(error.message);
  }
})();
