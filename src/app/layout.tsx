import { Template } from '@/components/Template'
import './globals.css'
import { URL } from '@/utils/const/enums/url'
import { CountryType } from '@/utils/interfaces/CountryTypes'

export const metadata = {
  title: 'Countries',
  description: 'All about countries',
}

// async function getData() {
//   try {
//     const res = await fetch(URL.ALL)
//     const data: CountryType[] = await res.json()
//     return data
//   } catch (e) {
//     console.error(e)
//   }
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const data = await getData()

  return (
    <html lang="en">
      <Template>
        {children}
      </Template>
    </html>
  )
}
