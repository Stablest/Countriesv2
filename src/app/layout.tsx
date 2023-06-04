import { Template } from '@/components/Template'
import './globals.css'

export const metadata = {
  title: 'Countries',
  description: 'All about countries',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Template>
        {children}
      </Template>
    </html>
  )
}
