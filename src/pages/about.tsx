import React from 'react'
import Head from 'next/head'
import Page from '@shared/Page'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function AboutUsPage() {
  const router = useRouter()

  return (
    <>
      <Page
        title="Plaisir is"
        description="French values with an outgoing New York-ish personality, authentic
         atmosphere with distinct elements from Danish interior design and a
         casual and open minded approach to wine."
        uri={router.route}
        headerCenter
      >
        <section className="values">
          <div className="values-content">
            <div className="values-column values-column-right">
              <div className="value-column">
                <h3>we are</h3>
              </div>
              <ul>
                <li>open minded</li>
                <li>outgoing</li>
                <li>understanding</li>
                <li>guiding</li>
              </ul>
            </div>
            <div className="divider" />
            <div className="values-column values-column-left">
              <div className="value-column">
                <h3>we are not</h3>
              </div>
              <ul>
                <li>snobby / posh</li>
                <li>boring</li>
                <li>dominating</li>
                <li>educating</li>
              </ul>
            </div>
          </div>
        </section>
        <style>{`
          .mission {
            padding: 20px;
            text-align: center;
          }

          .mission h2 {
            color: #663300;
          }

          .values {
            padding: 40px;
            text-align: center;
          }

          .values-header h2 {
            margin: 0;
            font-size: 1.5rem;
          }

          .values-content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
          }

          .values-column {
            margin: 0 20px;
          }

          .values-column-right {
            text-align: right;
          }

          .values-column-left {
            text-align: left;
          }

          .values-column h3 {
            margin-bottom: 30px;
          }

          .values-column ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .values-column ul li {
            margin: 5px 0;
          }

          .divider {
            width: 2px;
            height: 150px;
            background-color: #ffcc00;
            margin: 0 20px;
          }
        `}</style>
      </Page>
    </>
  )
}
