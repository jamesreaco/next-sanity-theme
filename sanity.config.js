import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const title = 'Portfolio Website - Next, Sanity & Tailwind'

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: title,
  apiVersion: '2023-02-18',
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool()
  ],
})

export default config