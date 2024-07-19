'use client'
import { Title } from '../ui/title/title'
import { Country, getVisitedCountries, useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'
import styles from './countries-list.module.css'
import { useMemo } from 'react'
import { sortCountriesByLatestDate } from '@/utils/utils'

export const VisitedCountries = () => {
  const countries = useStore(getVisitedCountries)

  return (
    <div className={styles.container}>
      <span>total: {countries.length}</span>
      <Title>Visited countries</Title>
      {sortCountriesByLatestDate(countries).map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
