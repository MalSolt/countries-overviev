import { Country } from '@/store/store'
import { ChangeEvent, useMemo, useState } from 'react'

type Key = keyof Pick<Country, 'name' | 'code' | 'currency' | 'capital'>

export const useFilterCountries = (countries: Country[], key: Key) => {
  const [value, setValue] = useState('')

  const result = useMemo(() => {
    return countries.filter((elem) => elem[key].toLowerCase().includes(value.toLowerCase()))
  }, [value, countries])

  return { value, result, setValue }
}
