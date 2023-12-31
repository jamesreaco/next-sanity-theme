import { CogIcon } from '@sanity/icons'
import Iframe from 'sanity-plugin-iframe-pane'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
          .id('settings')
          .schemaType('settings')
          .documentId('settings')
          .title('Site Settings')
        ),
      S.divider(),
      S.listItem()
        .title('Core Pages')
        .child(
          S.list()
            .title('Core Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(
                  S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
                  .title('Home Page')
                  .views([
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
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          [
            'page',
            'menuItem',
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .child(
                  S.documentList()
                    .title('All Posts')
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Categories')
                .child(
                  S.documentList()
                    .title('Post Categories')
                    .filter('_type == "postCategory"')
                ),
              S.listItem()
                .title('Authors')
                .child(
                  S.documentList()
                    .title('Post Authors')
                    .filter('_type == "author"')
                ),
            ])
        ),
        ...S.documentTypeListItems().filter(
          (listItem) =>
            [
              'caseStudy',
            ].includes(listItem.getId())
        ),
        S.divider(),

        
    ])


    