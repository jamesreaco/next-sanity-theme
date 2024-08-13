import { site } from "@/constants/site-config";

export const defaultMetadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: {
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.title,
    images: [`${site.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [`${site.url}/images/og.png`],
    creator: site.authorUsername,
  },
  authors: [
    {
      name: site.authorName,
      url: site.authorWebsite,
    },
  ],
};