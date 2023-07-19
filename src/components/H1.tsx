// 'use client'
// import clsx from 'clsx'
import styles from '@/styles/components/H1.module.scss'

interface Props {
  label: string
}
export default function H1({ label }: Props) {
  //   const cssClasses = clsx(styles.task, styles[currStatus])
  return <h1 className={styles.h1}>{label}</h1>
}
