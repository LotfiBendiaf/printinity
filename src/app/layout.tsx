import { Inter } from 'next/font/google'
import './globals.css'
import { cn, constructMetadata } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Toaster } from 'sonner'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'CosmiMarket',
//   description: 'Bienvenue a CosmiMarket. chaque produit sur notre plateforme est vérifié par notre équipe pour assurer la meilleur qualité',
// }

export const metadata = constructMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='h-full'>
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className='flex-grow flex-1'>{children}</div>
            <Footer />
          </Providers>
        </main>
        <Toaster position='bottom-center' richColors />
      </body>
    </html>
  )
}
