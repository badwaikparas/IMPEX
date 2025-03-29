const nodemailer = require("nodemailer")

const sendMail = async (name, email, phoneNo, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            port: 465,
            auth: {
                user: "wearetechnobyte@gmail.com",
                pass: "jtnnetuyjygluvta"// password
            },
        });

        const uniqueMessageId = `<${Date.now()}@shiply.com>`; // Ensure uniqueness (e.g., timestamp)

        const mailOptions = {
            from: 'wearetechnobyte@gmail.com', // Sender address
            to: 'otherthing16052004@gmail.com', // recipient's email
            subject: `Demo Request by ${name}`,
            messageId: uniqueMessageId, // Set unique Message-ID
            html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .email-container { max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px; }
            .email-header { background: #007BFF; color: #fff; padding: 10px 20px; text-align: center; }
            .email-body { padding: 20px; }
            .field-label { font-weight: bold; }
            .email-footer { text-align: center; font-size: 12px; color: #777; padding: 10px 0; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>New Demo Request</h1>
            </div>
            <div class="email-body">
              <p><span class="field-label">Name:</span> ${name}</p>
              <p><span class="field-label">Email:</span> ${email}</p>
              <p><span class="field-label">Phone Number:</span> ${phoneNo}</p>
              <p><span class="field-label">Message:</span> ${message}</p>
            </div>
            <div class="email-footer">
              <p>This is an automated email. Please do not reply.</p>
            </div>
          </div>
        </body>
        </html>
      `,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.response}`);
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
    }
};

module.exports = sendMail;