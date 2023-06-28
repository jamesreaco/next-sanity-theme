import { CogIcon } from '@sanity/icons'

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
                .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
              S.listItem()
                .title('Blog')
                .child(S.document().schemaType('blogPage').documentId('blogPage').title('Blog Page')),
              S.listItem()
                .title('Case Studies')
                .child(S.document().schemaType('caseStudyPage').documentId('caseStudyPage').title('Case Studies')),
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
    
  
    

