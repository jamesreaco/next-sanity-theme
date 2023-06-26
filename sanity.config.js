import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const title = 'Portfolio Website - Next, Sanity & Tailwind'

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: title,
  apiVersion: apiVersion,
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool()
  ],
})

export default config