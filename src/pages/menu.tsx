import React, { useState } from 'react'
import Head from 'next/head'
import Page from '@shared/Page'
import { useRouter } from 'next/router'
import NotWine from '@images/not_wine.png'
import Wine from '@images/wine.png'
import Food from '@images/food.png'
import Image from 'next/image'

export default function MenuPage() {
  const router = useRouter()
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>

      <Page
        title="Menu"
        description="Atmosphere over wine"
        uri={router.route}
        headerCenter
      >
        {/* Menu Section */}
        <section className="menu">
          <h2
            className="section-title"
            onClick={() => toggleSection('notWine')}
          >
            Not Wine
          </h2>
          <h2 className="section-title" onClick={() => toggleSection('wine')}>
            Wine
          </h2>
          <h2 className="section-title" onClick={() => toggleSection('food')}>
            Food and Quickes
          </h2>
        </section>

        {expandedSection && (
          <div className="modal">
            <div className="modal-content">
              <div className="close-button" onClick={() => toggleSection(null)}>
                ×
              </div>
              <div className="image-container">
                {expandedSection === 'notWine' && (
                  <Image
                    src={NotWine}
                    alt="Not Wine"
                    width={500}
                    height={500}
                    className="logo"
                  />
                )}
                {expandedSection === 'wine' && (
                  <Image
                    src={Wine}
                    alt="Wine"
                    width={500}
                    height={500}
                    className="logo"
                  />
                )}
                {expandedSection === 'food' && (
                  <Image
                    src={Food}
                    alt="Food"
                    width={500}
                    height={500}
                    className="logo"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .menu {
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: fadeIn 1s ease-in-out;
            border: 10px solid #ff9933;
            border-radius: 16px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            cursor: pointer;
            transition: color 0.3s ease;
            text-align: center;
          }

          .section-title:hover {
            color: #993300;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.5s ease-in-out;
          }

          .modal-content {
            background: #fff;
            border-radius: 10px;
            padding: 40px;
            position: relative;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .close-button {
            position: absolute;
            top: -10px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
          }

          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .logo {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .logo:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </Page>
    </>
  )
}
