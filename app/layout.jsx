import './globals.css'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact Form (Next.js)',
  description: 'Frontend Mentor project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
