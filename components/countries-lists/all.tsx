'use client'
import { useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'
import { Title } from '../ui/title/title'

export const AllCountries = () => {
  const countries = useStore((state) => state.countries)

  return (
    <div>
      <Title>All countries</Title>
      {countries.map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
