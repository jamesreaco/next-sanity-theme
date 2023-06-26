import { CogIcon } from '@sanity/icons'

export const structure = (S, context) =>
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
            ])
        ),
      
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'settings',
            'homePage',
            'blogPage'
          ].includes(listItem.getId())
      )

    ])
    
  
    

