import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {

  const body = await req.json()

  const name = body.name
  const email = body.email
  const message = body.message
  const subject = body.subject

  try {
    await sendgrid.send({
      to: process.env.YOUR_EMAIL_ADDRESS,
      from: process.env.WEBSITE_EMAIL_ADDRESS,
      subject: `[Form Submission] : ${subject}`,
      html: `<div>
        <div>
          Name: ${name}
        </div>
        <div>
          Email: ${email}
        </div>
        <div>
          Message: ${message}
        </div>
      </div>`,
    });

    return new Response(JSON.stringify({ body: body }))

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send.' }))
  }
  
}