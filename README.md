- name: Send Email
  uses: your-username/send-email-action@v1
  with:
    to: "you@example.com"
    subject: "New JitPack Release"
    body: "Here is your link: https://jitpack.io/#your/project"
    smtp_host: "smtp.gmail.com"
    smtp_port: "465"
    smtp_user: ${{ secrets.SMTP_USER }}
    smtp_pass: ${{ secrets.SMTP_PASS }}

