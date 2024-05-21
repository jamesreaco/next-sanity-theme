import Iframe from "sanity-plugin-iframe-pane"

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
