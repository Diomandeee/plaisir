import React, { ReactElement } from 'react'
import styles from './Footer.module.css'
import Markdown from '@shared/Markdown'
import Links from './Links'
import Button from '@shared/atoms/Button'
import External from '@images/external.svg'
import { useMarketMetadata } from '@context/MarketMetadata'

export default function Footer(): ReactElement {
  const { siteContent } = useMarketMetadata()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <Links />
        <div className={styles.copyright}>
          © {year} <Markdown text={siteContent?.copyright} />
          Plaisir
        </div>
      </div>
    </footer>
  )
}
