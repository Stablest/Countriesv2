import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries',
  description: 'All about countries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} text-black bg-light-mode-background overflow-scroll`}>
        {children}
      </body>
    </html>
  )
}
