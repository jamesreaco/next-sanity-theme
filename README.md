## Introduction

[Next.js](https://nextjs.org/) + [Sanity](https://sanity.io/) portfolio and blog starter theme. Recently migrated to the Next.js App Router and TypeScript 🥳.

### Tech Stack

- [Next.js](https://nextjs.org/) – Framework
- [TypeScript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS Framework
- [Sanity](https://sanity.io/) – Headless CMS
- [SendGrid](https://sendgrid.com/) – Email API
- [Vercel](https://vercel.com/) – Hosting

## Setup

To get started, you'll first need to create a [Sanity](https://sanity.io/) and [SendGrid](https://sendgrid.com/) account. 

Once you have created a Sanity account, you can create a new Sanity project by following these [instructions](https://www.sanity.io/docs/create-a-sanity-project).

Next, you'll need to clone this repository, open it in your code editor, run `npm install` to install the required dependencies and add the following environment variables to a `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID – your Sanity Project ID (create an account here - https://sanity.io).
NEXT_PUBLIC_SANITY_DATASET – use production here.
NEXT_PUBLIC_SANITY_API_VERSION – use the date you created the dataset in the format yyyy-mm-dd.
SANITY_API_READ_TOKEN – create an API token in Sanity with 'Viewer' permissions.
SENDGRID_API_KEY – your SendGrid API key (create an account here - https://sendgrid.com).
YOUR_EMAIL_ADDRESS – contact form submissions will be sent to this email.
WEBSITE_EMAIL_ADDRESS – the email you verified with SendGrid.
NEXT_PUBLIC_SITE_URL - use 'http://localhost:3000' in development and 'https://yourdomain.com' in production.
```

→ You will need to setup CORS in the Sanity dashboard before you can connect to the Sanity API by following [these instructions](https://www.sanity.io/docs/cors#5a355ee47b66). Add http://localhost:3000 to connect in development and add your custom domain before deploying to production.

→ Remember to run `npm install` to install all the required dependencies.
 
→ Remember to add the environment variables to Vercel before deploying to production.

 Once everything is set, you can start the development server by running `npm run dev`. To access your Sanity Studio navigate to localhost:3000/studio. You will need to sign in with the credentials you used to create the project.

→ If you get stuck setting up SendGrid, you can follow this tutorial on [Free Code Camp](https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/). 

## Author

#### James Rea

- Twitter ([@jamesreaco](https://twitter.com/jamesreaco))
- Website ([jamesrea.co](https://jamesrea.co))

For business enquiries, you can email me at hello@jamesrea.co.