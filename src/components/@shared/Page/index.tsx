import React, { ReactNode, ReactElement } from 'react'
import PageHeader from './PageHeader'
import Seo from './Seo'
import Container from '@shared/atoms/Container'
import Image from 'next/image'
import Plaisir from '@images/plaisir.png'
export interface PageProps {
  children?: ReactNode
  title?: string
  uri: string
  description?: string
  noPageHeader?: boolean
  headerCenter?: boolean
  image?: string
}

export default function Page({
  children,
  title,
  uri,
  description,
  noPageHeader,
  headerCenter
}: PageProps): ReactElement {
  return (
    <>
      <Seo title={title} description={description} uri={uri} />
      <Container>
        {title && !noPageHeader && (
          <PageHeader
            title={<>{title.slice(0, 600)}</>}
            description={description}
            center={headerCenter}
          />
        )}
        {/* <div style={{ marginBottom: '2rem' }}>
          <Image
            src={Plaisir}
            alt="Logo"
            width={200}
            height={200}
            className="logo"
          />
        </div> */}
        {children}
      </Container>
    </>
  )
}
