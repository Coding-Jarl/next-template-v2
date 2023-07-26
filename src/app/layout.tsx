import type { Metadata } from 'next'
import '@/styles/app.scss'
import styles from '@/styles/layouts/Root.module.scss'
import Hotlinks from '@/components/Hotlinks'
import Search from '@/components/Search'

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
      <body className={styles.wrapper}>
        <header className={styles.header}>
          <Hotlinks />
          <Search />
        </header>
        <main className={styles.Main}>{children}</main>
      </body>
    </html>
  )
}
