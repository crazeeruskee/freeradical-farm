import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'freeradical.farm - Precision Microgreens',
  description: 'Tech-enabled microgreens farming. Locally grown, precision cultivated. From the makers of freeradical.tech.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}