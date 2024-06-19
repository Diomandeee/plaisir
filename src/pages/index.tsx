import React from 'react'
import Head from 'next/head'
import Page from '@shared/Page'
import Button from '@shared/atoms/Button'
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
      <Page
        title="Not Intimidating, Not Boring"
        description="Coming Soon"
        uri={router.route}
        headerCenter
      ></Page>
      <div
        className="image-container"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="logo">
          <Image src={Plaisir} alt="Logo" width={200} height={200} />
        </div>
      </div>

      <style jsx>{`
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }

        .logo {
          transition: transform 0.3s ease;
          animation: spin 20s linear infinite; /* Slower animation */
        }

        /* Keyframes for the spin animation */
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .logo:hover {
          transform: rotate(0deg) scale(1.2); /* Stop at current point and scale */
        }
      `}</style>
    </>
  )
}
