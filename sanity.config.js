import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemas';
import { structure } from './sanity/config/sanity.structure';
import { defaultDocumentNode } from './sanity/config/sanity.structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const title = 'Next.js, Sanity & Tailwind Theme'

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: title,
  apiVersion: apiVersion,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool()
  ],
  schema: { 
    types: schemaTypes 
  },
  useCdn: false
})

export default config