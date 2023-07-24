'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Hotlinks.module.scss'
import { FormEvent, useRef, useState } from 'react'
import { SearchReturn } from '@/app/api/search/route'

export default function Hotlinks() {
  const [needle, setNeedle] = useState('')
  const [searchFocused, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchReturn>({
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
          <li>
            <ul>
              {searchResults.users.map((elt) => (
                <li key={elt.id}>{elt.name}</li>
              ))}
            </ul>
          </li>
          <li>
            <ul>
              {searchResults.articles.map((elt) => (
                <li key={elt.id}>{elt.title}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}

// - Avatar/Login prompt
