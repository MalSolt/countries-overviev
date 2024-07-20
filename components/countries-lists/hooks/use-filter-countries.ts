import { Country } from '@/store/store'
import { ChangeEvent, useMemo, useState } from 'react'

type keyTypes = Pick<Country, 'name' | 'code' | 'currency' | 'capital'>

export const useFilterCountries = (countries: Country[], key: keyof keyTypes) => {
  const [value, setValue] = useState('')

  const result = useMemo(() => {
    return countries.filter((elem) => elem[key].toLowerCase().includes(value.toLowerCase()))
  }, [value, countries])

  return { value, result, setValue }
}
