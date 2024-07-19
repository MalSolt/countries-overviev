'use client'
import { fetchCountriesData } from '@/api/country'
import { Country, CountryStatus, useStore } from '@/store/store'
import { nanoid } from 'nanoid'
import { ReactNode, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export const SetStore = ({ children }: Props) => {
  const setCountries = useStore((state) => state.setCountries)
  useEffect(() => {
    fetchCountriesData().then((data) => {
      const initialCountries: Country[] = data.map((elem) => ({
        id: nanoid(),
        name: elem.name.common,
        code: elem.idd.root,
        currency: Object.keys(elem.currencies)[0],
        capital: elem.capital[0],
        flag: elem.flags.png,
        isFavorite: false,
        status: CountryStatus.NotVisited,
        visitedDates: [],
      }))
      setCountries(initialCountries)
    })
  }, [])

  return <div>{children}</div>
}
