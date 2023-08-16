import styles from '@/styles/components/Hero.module.scss'
import H1 from './H1'

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <H1 label="ValhallaCode" />
      <div className={styles.tilt}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </section>
  )
}
