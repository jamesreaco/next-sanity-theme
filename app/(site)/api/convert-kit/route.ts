import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {

  const body = await req.json()
  const email: string = body.email
  
  const apiKey = process.env.CONVERT_KIT_API_KEY
  const formId = process.env.CONVERT_KIT_FORM_ID

  const params = {
    email: email,
    api_key: apiKey,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( params )  
  };

  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`
  
  try {

    const response = await fetch(url, options)
    const data = await response.json()
    
    return new Response(JSON.stringify({ success: true, data }))

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to subscribe.' }))
  }
}