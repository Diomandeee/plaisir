import React, { useState } from 'react'
import Head from 'next/head'
import Page from '@shared/Page'
import { useRouter } from 'next/router'
import NotWine from '@images/note_wine.png'
import Wine from '@images/note_wine.png'
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
        <section className="menu">
          <div className="section-titles-container">
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
          </div>
          {expandedSection && (
            <div className="menu-section expanded">
              <div className="close-button" onClick={() => toggleSection(null)}>
                ×
              </div>
              <div className="image-container">
                <Image
                  src={
                    expandedSection === 'notWine'
                      ? NotWine
                      : expandedSection === 'wine'
                      ? Wine
                      : Food
                  }
                  alt={expandedSection}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          )}
        </section>

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

          .menu-container {
            display: flex;
            justify-content: center;
            padding: 2rem;
          }

          .menu {
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 3rem;
            max-width: 900px;
            animation: fadeIn 1s ease-in-out;
          }

          .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 1.5rem;
            cursor: pointer;
            transition: color 0.3s, transform 0.3s;
          }

          .section-title:hover {
            color: #993300;
            transform: scale(1.05);
          }

          .menu-section {
            background: #f8f8f8;
            border-radius: 10px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
            text-align: center;
          }

          .expanded {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            backdrop-filter: blur(5px);
          }

          .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
            z-index: 1001;
          }

          .section-titles-container {
            display: flex; /* Use flexbox for layout */
            justify-content: space-around; /* Distribute titles evenly */
            margin-bottom: 2rem; /* Add space below the titles */
            align-items: center;
          }

          .image-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            max-width: 100%;
            max-height: 100%;
            margin-bottom: 1rem;
          }
        `}</style>
      </Page>
    </>
  )
}
