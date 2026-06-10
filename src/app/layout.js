import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata = {
  title: "Muhamad Marseal's Portfolio",
  description: 'Full-Stack Developer based in Tangerang Selatan, ID',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  )
}