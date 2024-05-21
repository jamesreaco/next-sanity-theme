import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const BlogItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Blog')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('blogPage')
        .documentId('blogPage')
        .title('Blog Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=blog`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=blog`,
            })
            .title('Preview'),
        ])
      )