import styles from '@/styles/components/Description.module.scss'

export default function Description() {
  return (
    <section className={styles.wrapper}>
      <article>
        <h2>Presentation</h2>
        <p>
          This PoC is meant as a showcase of what can be done with a bit of
          tooling and Next. It&apos;s meant to kickstart new projects and
          provide examples of basic components & behaviours of Next.
        </p>
        <p>
          It is NOT meant to be a full-fledged project and is not representative
          of this templates&apos;s capapibilities
        </p>
      </article>
      <article>
        <h2>Tools</h2>
        <p>
          This template comes with preconfigured tools. These tools will help
          you with code linting (ESLint, Prettier, Lint-staged), git workflow
          and commit linting (Husky, Commitlint, Commitizen), continuous
          integration and documentation(GitHub Actions, Standard Version).
        </p>
      </article>
      <article>
        <h2>Components</h2>
        <p>
          This repository contains several sample components meant to show basic
          features of this template: Next App Router, Next SSR & CSR components,
          ...
        </p>
      </article>
    </section>
  )
}
