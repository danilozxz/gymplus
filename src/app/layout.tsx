import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gymplus',
  description: 'Desenvolvido por Danilo Fernandes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth scroll-pt-6'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
