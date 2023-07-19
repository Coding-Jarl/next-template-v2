import type { Metadata } from 'next'
import '@/styles/app.scss'

export const metadata: Metadata = {
  title: 'Next Template',
  description: "Change this! It's meant to help SEO for your project",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
