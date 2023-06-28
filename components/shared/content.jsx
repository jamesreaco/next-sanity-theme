import { PortableText } from '@portabletext/react';
import styles from '@/styles/content.module.css'

export default function Content({ data }) {
  return (
    <div className={styles.content}>
      <PortableText value={data} />
    </div>
  )
}
