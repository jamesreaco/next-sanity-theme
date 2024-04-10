import sendgrid from "@sendgrid/mail";
import { NextRequest } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {

  const body = await request.json()

  const name: string = body.name
  const email: string = body.email
  const message: string = body.message
  const subject: string = body.subject

  const template = `
    <div>
      <div> Name: ${name} </div>
      <div> Email: ${email} </div>
      <div> Message: ${message} </div>
    </div>
  `
  
  const payload = {
    to: process.env.YOUR_EMAIL_ADDRESS as string,
    from: process.env.WEBSITE_EMAIL_ADDRESS as string,
    subject: `[Form Submission] : ${subject}`,
    html: template
  }

  try {
    await sendgrid.send(payload)
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: `Failed to send message: ${error}`, 
      status: 400, 
    }))
  }

  return new Response(JSON.stringify({ 
    message: "Success", 
    status: 200
  }))
}