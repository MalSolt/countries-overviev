import { fetchCountries } from '@/api/country'
import { nanoid } from 'nanoid'
import { enqueueSnackbar } from 'notistack'
import { toast } from 'react-toastify'
import { create } from 'zustand'

export enum CountryStatus {
  Visited = 'visited',
  NotVisited = 'not visited',
}

export type Country = {
  id: string
  name: string
  code: string
  currency: string
  capital: string
  flag: string
  isFavorite: boolean
  status: CountryStatus
  visitedDates: string[]
}

interface StoreState {
  countries: Country[]
  error: string | null
  setCountries: (list: Country[]) => void
  fetchCountries: () => void
  changeCountryStatus: (id: Country['id'], status: CountryStatus) => void
  favoriteToggle: (id: Country['id']) => void
  addVisitedDate: (id: Country['id'], date: string) => void
}

export const useStore = create<StoreState>((set) => ({
  countries: [],
  error: null,
  setCountries: (list: Country[]) => set((state) => ({ countries: list })),
  fetchCountries: async () => {
    try {
      const data = await fetchCountries()
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
      set({ countries: initialCountries })
    } catch (error) {
      enqueueSnackbar('Failed to fetch data. Please try again later.', { variant: 'error' })
    }
  },
  changeCountryStatus: (id: Country['id'], status: CountryStatus) =>
    set((state) => ({
      countries: state.countries.map((country) =>
        country.id === id ? { ...country, status } : country
      ),
    })),
  favoriteToggle: (id: Country['id']) =>
    set((state) => ({
      countries: state.countries.map((country) =>
        country.id === id ? { ...country, isFavorite: !country.isFavorite } : country
      ),
    })),
  addVisitedDate: (id: Country['id'], date: string) =>
    set((state) => ({
      countries: state.countries.map((country) =>
        country.id === id ? { ...country, visitedDates: [...country.visitedDates, date] } : country
      ),
    })),
}))

export const getFavoriteCountries = (state: StoreState) =>
  state.countries.filter((elem) => elem.isFavorite)
export const getVisitedCountries = (state: StoreState) =>
  state.countries.filter((elem) => elem.status === 'visited')
