import { defaultGroups } from "../utils/defaultGroups"
import { defaultFieldsets } from "../utils/defaultFieldsets"
import { defaultSeoFields } from "../utils/defaultSeoFields"

export default {
  name: 'caseStudyPage',
  title: 'Case Study Page',
  type: 'document',
  fieldsets: [
    ...defaultFieldsets,
  ],
  groups: [
    ...defaultGroups,
  ],
  fields: [
    ...defaultSeoFields,
  ]
}