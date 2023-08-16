import styles from '@/styles/components/Hotlinks.module.scss'
import Link from 'next/link'

export default function Hotlinks() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link href="" className={styles.Logo}>
          Next Template
        </Link>
        <Link href="">Link #1</Link>
        <Link href="">Link #2</Link>
        <Link href="">Link #3</Link>
      </nav>
    </div>
  )
}

// - Avatar/Login prompt
