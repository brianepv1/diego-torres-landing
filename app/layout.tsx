import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diego Torres - Botanica Torres',
  description: 'Consultor de tarot y trabajos esotericos en Manzanillo, La Huerta y Mas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
