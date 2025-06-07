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
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Primary Meta Tags */}
        <title>[Diego Torres | Brujo en Manzanillo]</title>
        <meta name="title" content="[Diego Torres | Brujo en Manzanillo, Lectura de Cartas, Veladoras, Limpias Espirituales]" />
        <meta name="description" content="[Descubre la guía espiritual y los servicios de Diego Torres, brujo en Manzanillo. Lectura de cartas, rituales con veladoras, limpiezas energéticas y conexión con arcángeles. Tu camino hacia el bienestar espiritual.]" />
        <meta name="keywords" content="[Diego Torres, brujo, Manzanillo, lectura de cartas, veladoras, limpias espirituales, arcángeles, guía espiritual, bienestar espiritual, esoterismo, brujería, hechizos, rituales, Colima]" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="[Diego Torres]" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diego-torres.vercel.app/" />
        <meta property="og:title" content="[Diego Torres | Brujo en Manzanillo, Lectura de Cartas, Veladoras, Limpias Espirituales]" />
        <meta property="og:description" content="[Descubre la guía espiritual y los servicios de Diego Torres, brujo en Manzanillo. Lectura de cartas, rituales con veladoras, limpiezas energéticas y conexión con arcángeles. Tu camino hacia el bienestar espiritual.]" />
        <meta property="og:image" content="https://diego-torres.vercel.app/image5.jpeg" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://diego-torres.vercel.app/" />
        <meta property="twitter:title" content="[Diego Torres | Brujo en Manzanillo, Lectura de Cartas, Veladoras, Limpias Espirituales]" />
        <meta property="twitter:description" content="[Descubre la guía espiritual y los servicios de Diego Torres, brujo en Manzanillo. Lectura de cartas, rituales con veladoras, limpiezas energéticas y conexión con arcángeles. Tu camino hacia el bienestar espiritual.]" />
        <meta property="twitter:image" content="https://diego-torres.vercel.app/image5.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
