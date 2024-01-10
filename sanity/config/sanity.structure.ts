import Iframe from 'sanity-plugin-iframe-pane'
import type {StructureBuilder, StructureResolver} from "sanity/desk";
import { FiBriefcase, FiSettings, FiEdit2, FiFile } from "react-icons/fi";

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title('Content')
    .items([
      SettingsItem(S),
      S.divider(),
      PagesItem(S),
      BlogItem(S),
      CaseStudyItem(S),
      S.divider(),
    ])

const SettingsItem = (S: StructureBuilder) =>
  S.listItem()
  .title('Site Settings')
  .icon(FiSettings)
  .child(
    S.document().id('settings').schemaType('settings').documentId('settings').title('Site Settings')
  )
  
const PagesItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
    .icon(FiFile)
    .child(
      S.list()
        .title('Pages')
        .items([
          S.listItem().title('Home').child(S.document().schemaType('homePage').documentId('homePage').title('Home Page').views([
                S.view.form(),
                S.view
                  .component(Iframe)
                  .options({
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview`,
                  })
                  .title('Preview'),
              ])
            ),
          S.listItem()
            .title('Blog')
            .child(S.document().schemaType('blogPage').documentId('blogPage').title('Blog Page')),
          S.listItem()
            .title('Case Studies')
            .child(S.document().schemaType('caseStudyPage').documentId('caseStudyPage').title('Case Studies Page')),
          S.listItem()
            .title('Contact')
            .child(S.document().schemaType('contactPage').documentId('contactPage').title('Contact Page')),
        ])
    )
  
const BlogItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Blog')
    .icon(FiEdit2)
    .child(
      S.list()
        .title('Blog')
        .items([
          S.listItem().title('Posts').child(S.documentList().title('All Posts').filter('_type == "post"')),
          S.listItem().title('Categories').child(S.documentList().title('Post Categories').filter('_type == "postCategory"')),
          S.listItem().title('Authors').child(S.documentList().title('Post Authors').filter('_type == "author"')),
        ])
    )
  
const CaseStudyItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Case Studies")
    .icon(FiBriefcase)
    .child(S.documentList().title('Case Studies').filter('_type == "caseStudy"'))

export const defaultDocumentNode = (S: any, props: any) => {

  const { schemaType } = props
  
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => doc?.slug?.current 
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=blog/${doc.slug.current}`
          : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview`,
        })
        .title('Preview Post'),
    ])
  }

  if (schemaType === "caseStudy") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => doc?.slug?.current 
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=case-studies/${doc.slug.current}`
          : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview`,
        })
        .title('Preview Case Study'),
    ])
  }

  return S.document().views([S.view.form()])
}



    