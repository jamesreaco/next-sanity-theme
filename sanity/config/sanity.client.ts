import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn
});