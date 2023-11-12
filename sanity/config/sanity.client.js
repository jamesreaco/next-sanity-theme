const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const config = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false
}

export default config