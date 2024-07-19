'use client'
import { getFavoriteCountries, useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'
import { Title } from '../ui/title/title'
import styles from './countries-list.module.css'

export const FavoriteCountries = () => {
  const countries = useStore(getFavoriteCountries)

  return (
    <div className={styles.container}>
      <Title>Favorite countries</Title>
      {countries.map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
