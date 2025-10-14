import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { Header } from '@/components/shared/header'

const nunitoFont = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "DoDo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoFont.className}`}>
        <Header />
        <main className='min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
