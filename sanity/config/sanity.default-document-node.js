import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode = (S, {schemaType}) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview`,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}