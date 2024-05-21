import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const ContactItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Contact')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('contactPage')
        .documentId('contactPage')
        .title('Contact Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=contact`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=contact`,
            })
            .title('Preview'),
        ])
      )