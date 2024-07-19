'use client'
import { getFavoriteCountries, useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'
import { Title } from '../ui/title/title'

export const FavoriteCountries = () => {
  const countries = useStore(getFavoriteCountries)

  return (
    <div>
      <Title>Favorite countries</Title>
      {countries.map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
