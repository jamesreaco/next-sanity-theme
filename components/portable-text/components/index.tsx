import { PortableTextComponents } from '@portabletext/react';
import PortableTextQuote from './portable-text-quote';
import PortableTextImage from './portable-text-image';

export const portableTextComponents: PortableTextComponents = {
  types: {
    postImageBlock: (data) => {
      return (
        <PortableTextImage data={data.value} />
      )
    },
    postQuoteBlock: (data) => {
      return (
        <PortableTextQuote data={data.value} />
      )
    }
  },
  block: {
    h2: ({ value }) => {
      return (
        <h2 id={`${value._key}`}>
          {value.children[0].text}
        </h2>
      )
    },
    h3: ({ value }) => {
      return (
        <h3 id={`${value._key}`}>
          {value.children[0].text}
        </h3>
      )
    },
    h4: ({ value }) => {
      return (
        <h4 id={`${value._key}`}>
          {value.children[0].text}
        </h4>
      )
    },
  },
}