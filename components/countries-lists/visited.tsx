'use client'
import { Title } from '../ui/title/title'
import { getVisitedCountries, useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'

export const VisitedCountries = () => {
  const countries = useStore(getVisitedCountries)

  return (
    <div>
      <Title>Visited countries</Title>
      {countries.map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
