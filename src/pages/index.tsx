import React from 'react'
import Head from 'next/head'
import Page from '@shared/Page'
import Button from '@shared/atoms/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function IndexPage() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Casual Wine Bar</title>
      </Head>

      <Page
        title="Not Intimidating,Not Boring"
        description="Coming Soon"
        uri={router.route}
        headerCenter
      ></Page>
    </>
  )
}
