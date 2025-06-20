import type { Metadata } from 'next'
import BuyerFormWrapper from './components/BuyerFormWrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'osystem-shop'
}

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang='en'>
      <body className='antialiased flex flex-col min-h-screen'>
        <main className='max-w-7xl w-full mx-auto px-4'>
          {children}
        </main>
        <footer className='mt-auto'>
          <BuyerFormWrapper />
        </footer>
      </body>
    </html>
  )
}
