'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Hotlinks.module.scss'
import { FormEvent, useRef, useState } from 'react'

export default function Hotlinks() {
  const [needle, setNeedle] = useState('')
  const [searchFocused, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<API.SearchReturn>({
    users: [],
    articles: [],
  })
  const searchRef = useRef<HTMLInputElement>(null)

  const hChange = async (evt: FormEvent<HTMLInputElement>) => {
    setNeedle(evt.currentTarget.value)

    try {
      const res = await fetch(
        `http://localhost:3000/api/search?needle=${evt.currentTarget.value}`
      )
      const results = await res.json()
      setSearchResults(results)
    } catch (err) {
      console.log('Woops')
    }
  }

  const hFocus = () => {
    setSearchFocus(document.activeElement === searchRef.current)
  }

  const cssClasses = clsx(
    styles.search,
    searchFocused || styles.unfocused,
    needle === '' && styles.empty,
    searchResults.articles.length + searchResults.users.length
      ? styles.results
      : styles.noresults
  )

  return (
    <div className={styles.wrapper}>
      <nav>
        <a className={styles.Logo}>Next Template</a>
        <a href="">Link #1</a>
        <a href="">Link #2</a>
        <a href="">Link #3</a>
      </nav>
    </div>
  )
}

// - Avatar/Login prompt
