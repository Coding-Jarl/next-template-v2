'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Hotlinks.module.scss'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { SearchReturn } from '@/app/api/search/route'
import { DEFAULT_RESULT_SEARCH, fetchSearch } from '@/lib/api/search'

export default function Hotlinks() {
  const [needle, setNeedle] = useState('')
  const [searchFocused, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchReturn>(
    DEFAULT_RESULT_SEARCH
  )
  const searchRef = useRef<HTMLInputElement>(null)

  const hChange = async (evt: FormEvent<HTMLInputElement>) => {
    setNeedle(evt.currentTarget.value)
  }

  const hFocus = () => {
    setSearchFocus(document.activeElement === searchRef.current)
  }

  const hasResult = Boolean(
    searchResults.articles.length + searchResults.users.length
  )

  const cssClasses = clsx(
    styles.search,
    searchFocused || styles.unfocused,
    needle === '' && styles.empty,
    hasResult ? styles.results : styles.noresults
  )

  useEffect(() => {
    const fetchResults = async () => {
      const results = await fetchSearch(needle)
      setSearchResults(results ?? DEFAULT_RESULT_SEARCH)
    }
    fetchResults()
  }, [needle])

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
