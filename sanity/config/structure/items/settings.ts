import { FiSettings } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";

export const SettingsItem = (S: StructureBuilder) =>
  S.listItem()
  .title('Site Settings')
  .icon(FiSettings)
  .child(
    S.document()
      .id('settings')
      .schemaType('settings')
      .documentId('settings')
      .title('Site Settings')
  )