import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const PrivacyItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Privacy')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('privacyPage')
        .documentId('privacyPage')
        .title('Privacy Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=privacy`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=privacy`,
            })
            .title('Preview'),
        ])
      )