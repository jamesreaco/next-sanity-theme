import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const TermsItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Terms')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('termsPage')
        .documentId('termsPage')
        .title('Terms Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=terms`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=terms`,
            })
            .title('Preview'),
        ])
      )