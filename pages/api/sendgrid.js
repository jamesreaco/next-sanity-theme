import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  
  try {
    await sendgrid.send({
      to: process.env.YOUR_EMAIL_ADDRESS, 
      from: process.env.WEBSITE_EMAIL_ADDRESS,
      subject: `[Form Submission] : ${req.body.subject}`,
      html: ` 
        <div>
          <h1>You've got a new message!</h1>
          <div>
            <p>
              <strong>
                Name:
              </strong>
            </p>
            <p>
              ${req.body.name} 
            </p>
          </div>
          <div>
            <p>
              <strong>
                Email:
              </strong>
            </p>
            <p>
              ${req.body.email}
            </p>
          </div>
          <div>
            <p>
              <strong>
                Subject:
              </strong>
            </p>
            <p>
              ${req.body.subject}
            </p>
          </div>
          <div>
            <p>
              <strong>
                Messsage:
              </strong>
            </p>
            <p>
              ${req.body.message}
            </p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;