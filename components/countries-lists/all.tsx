'use client'
import { useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'
import { Title } from '../ui/title/title'
import styles from './countries-list.module.css'

export const AllCountries = () => {
  const countries = useStore((state) => state.countries)

  return (
    <div className={styles.container}>
      <Title>All countries</Title>
      {countries.map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
