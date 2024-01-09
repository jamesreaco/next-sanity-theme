import { type NextRequest } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {

  const body = await req.json()

  const name: string = body.name
  const email: string = body.email
  const message: string = body.message
  const subject: string = body.subject

  try {
    await sendgrid.send({
      to: process.env.YOUR_EMAIL_ADDRESS as string,
      from: process.env.WEBSITE_EMAIL_ADDRESS as string,
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