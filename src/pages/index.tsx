import React from 'react'
import Page from '@shared/Page'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Plaisir from '@images/plaisir.png'

export default function IndexPage() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about')
  }

  return (
    <>
      <Page title="Coming Soon" uri={router.route} headerCenter></Page>
      <div className="image-container" style={{ cursor: 'pointer' }}>
        <div className="logo">
          <Image src={Plaisir} alt="Logo" width={200} height={200} />
        </div>
      </div>
    </>
  )
}
