'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Hotlinks.module.scss'
import { FormEvent, useRef, useState } from 'react'

export default function Hotlinks() {
  const [needle, setNeedle] = useState('')
  const [searchFocused, setSearchFocus] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const hChange = (evt: FormEvent<HTMLInputElement>) => {
    setNeedle(evt.currentTarget.value)
  }

  const hFocus = () => {
    setSearchFocus(document.activeElement === searchRef.current)
  }

  const cssClasses = clsx(
    styles.search,
    searchFocused || styles.unfocused,
    needle === '' && styles.empty,
    needle.includes('Val') ? styles.results : styles.noresults
  )

  return (
    <header className={styles.header}>
      <div className={cssClasses}>
        <input
          ref={searchRef}
          type="search"
          value={needle}
          onChange={hChange}
          onFocus={hFocus}
          onBlur={hFocus}
        />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </header>
  )
}

// - Avatar/Login prompt
