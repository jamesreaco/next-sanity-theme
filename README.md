## Introduction

[Next.js](https://nextjs.org/) + [Sanity](https://sanity.io/) theme designed and developed by [James Rea](https://jamesrea.co).

Recently migrated to the Next.js App Router.

### Features

Here are the features provided out-of-the-box:

- [Page Builder](#page-builder)
- [Post Builder](#post-builder)
- [Global Site Settings](#global-site-settings)
- [Embedded Sanity Studio](#embedded-sanity-studio)
- [Contact Form (SendGrid API)](#contact-form-sendgrid-api)


#### Page Builder
Create fully custom pages without touching code using pre-made React components (blocks). Easily create new blocks to fit your requirements.

#### Post Builder
Create fully custom blog posts using pre-made React components (blocks). Easily create new blocks to fit your requirements.

#### Global Site Settings

Manage the entire site with global settings via the Sanity Studio dashboard. Out-of-the-box settings include the ability to add/remove menu items to the navbar, enable/disable the topbar, configure the footer and more. Easily add new settings as you need them.

#### Embedded Sanity Studio

Sanity Studio is embedded into the project meaning you can access it via http://localhost:3000/admin in development and https://yourwebsite.com/admin in production.

#### Contact Form (SendGrid API)
Integrated with the [SendGrid](https://sendgrid.com/) API for contact form submissions (free API Key is required).

---

### Tech Stack

- [Next.js](https://nextjs.org/) – Framework
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Sanity](https://sanity.io/) – Headless CMS
- [SendGrid](https://sendgrid.com/) – Email API
- [Vercel](https://vercel.com/) – Hosting

## Setup

To get started, you'll first need to create a [Sanity](https://sanity.io/) and [SendGrid](https://sendgrid.com/) account. 

Once you have created a Sanity account, you can create a new Sanity project by following these [instructions](https://www.sanity.io/docs/create-a-sanity-project).

Next, you'll need to fork this repository and set up the following environment variables in a `.env.local` file:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` – your Sanity Project ID (create an account [here](https://sanity.io))
- `NEXT_PUBLIC_SANITY_DATASET` – use `production` here.
- `NEXT_PUBLIC_SANITY_API_VERSION` – use the date you created the dataset in the format yyyy-mm-dd - (`2023-02-18`)

- `SANITY_API_READ_TOKEN`– create an API token in Sanity with 'Viewer' permissions.

- `SENDGRID_API_KEY` – your SendGrid API key. Create an account [here](https://sendgrid.com/).

- `YOUR_EMAIL_ADDRESS` – contact form submissions will be sent to this email.
- `WEBSITE_EMAIL_ADDRESS` – required by SendGrid, use something like noreply@yourwebsite.com.

- `NEXT_PUBLIC_SITE_URL` - add 'http://localhost:3000' to a `.env.development` file and 'https://yourdomain.com' to a `.env.production file`.

→ Remember to add the environment variables to Vercel before deploying to production.

→ You will need to add CORS origins in the Sanity dashboard before you can connect to the Sanity API by following [these instructions](https://www.sanity.io/docs/cors#5a355ee47b66). Add http://localhost:3000 to connect in development and add your custom domain before deploying to production.

→ Remember to run `npm install` to install all the required dependencies. 

 Once everything is set, you can start the development server by running `npm run dev`. To access your Sanity Studio navigate to localhost:3000/studio. You will need to sign in with the credentials you used to create the project.

→ If you're stuck setting up SendGrid, you can follow this tutorial on [Free Code Camp](https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/). 

## Author

#### James Rea

- Twitter ([@jamesreaco](https://twitter.com/jamesreaco))
- Website ([jamesrea.co](https://jamesrea.co))

For business enquiries, you can email me at hello@jamesrea.co.