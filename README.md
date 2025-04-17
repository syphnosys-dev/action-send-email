# 📧 Send Email via Nodemailer

This GitHub Action allows you to send an email using [Node.js](https://nodejs.org/) and [Nodemailer](https://nodemailer.com/). Easily integrate email notifications in your CI/CD pipeline.

## 📦 Inputs

| Name         | Description             | Required | Example                       |
|--------------|-------------------------|----------|-------------------------------|
| `to`         | Recipient email address | ✅ Yes   | `"example@example.com"`       |
| `subject`    | Subject line            | ✅ Yes   | `"Build Completed"`           |
| `body`       | Email body (HTML/text)  | ✅ Yes   | `"Your deployment is done."`  |
| `smtp_host`  | SMTP host               | ✅ Yes   | `"smtp.gmail.com"`            |
| `smtp_port`  | SMTP port               | ✅ Yes   | `"465"`                       |
| `smtp_user`  | SMTP username           | ✅ Yes   | `${{ secrets.SMTP_USER }}`    |
| `smtp_pass`  | SMTP password           | ✅ Yes   | `${{ secrets.SMTP_PASS }}`    |

## 🛠 Usage

```yaml
name: Send Email on Push

on:
  push:
    branches:
      - main

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Send Email
        uses: syphnosys-dev/action-send-email@v1
        with:
          to: "info@example.com"
          subject: "New Version Released"
          body: |
            <!DOCTYPE html>
            <html>
              <body style="font-family: Arial, sans-serif;">
                <h2>🎉 New Version Deployed</h2>
                <p>The latest version is now available.</p>
              </body>
            </html>
          smtp_host: "smtp.gmail.com"
          smtp_port: "465"
          smtp_user: ${{ secrets.SMTP_USER }}
          smtp_pass: ${{ secrets.SMTP_PASS }}
