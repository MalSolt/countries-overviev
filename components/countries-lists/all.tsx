'use client'
import { useStore } from '@/store/store'
import { CountryCard } from '../country-card/country-card'
import { TextField } from '../ui/text-field/text-field'
import { Title } from '../ui/title/title'
import styles from './countries-list.module.css'
import { useFilterCountries } from './hooks/use-filter-countries'

export const AllCountries = () => {
  const countries = useStore((state) => state.countries)
  const filter = useFilterCountries(countries, 'name')

  return (
    <div className={styles.container}>
      <TextField placeholder='Enter text' value={filter.value} onChange={filter.setValue} />
      <Title>All countries</Title>
      {filter.result.map((elem) => (
        <CountryCard key={elem.id} {...elem} />
      ))}
    </div>
  )
}
