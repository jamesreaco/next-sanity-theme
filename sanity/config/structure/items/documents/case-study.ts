import { FiBriefcase } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";

export const CaseStudyItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Case Studies")
    .icon(FiBriefcase)
    .child(
      S.documentList()
        .title('Case Studies')
        .filter('_type == "caseStudy"')
      )