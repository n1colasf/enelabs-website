import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "ENE Labs | Uruguayan Software Factory",
  description: "ENE Labs | Uruguayan Software Factory",
  URL: "https://enelabs.tech",
  siteName: "ENE Labs",
  twitterUsername: "@enelabs",
  keywords: "ENE Labs, Software Factory, Software Development, Uruguay",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" bg-gradient-to-r from-black to-blue-950">{children}</body>
      <Analytics />
    </html>
  )
}
