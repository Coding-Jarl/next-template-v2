import type { Metadata } from 'next'
import '@/styles/app.scss'
import styles from '@/styles/layouts/Root.module.scss'

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
      <body className={styles.Root}>
        <div className={styles.container}>
          <div className={styles.Logo}>Logo</div>
          <div className={styles.Hotlinks}>Hotlinks</div>
          <div className={styles.Nav}>Nav</div>
          <div className={styles.Main}>{children}</div>
        </div>
      </body>
    </html>
  )
}
