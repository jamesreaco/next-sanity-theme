import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemas';
import { structure } from './sanity/config/structure';
import {defaultDocumentNode} from '@/sanity/config/structure/default-document-node';
import { apiVersion, dataset, projectId, studioUrl, useCdn } from './sanity/config/sanity.api';

const title = 'Next.js, Sanity & Tailwind Theme'

const config = defineConfig({
  title: title,
  dataset: dataset,
  basePath: studioUrl,
  projectId: projectId,
  apiVersion: apiVersion,
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
  useCdn: useCdn
})

export default config