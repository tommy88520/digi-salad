import type { Metadata } from 'next'
import { AOSInit } from './aos'

import './globals.css'
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: 'DigiSalad demo',
  description: 'DigiSalad demo by Tommy Huang',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <AOSInit />
        <body className="font-['Proxima Nova']">
          {children}
        </body>
      </html>
    </>
   
  )
}
