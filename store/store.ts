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
  visitedDates: Date[]
}

interface StoreState {
  countries: Country[]
  filteredCountries: Country[]
  setCountries: (list: Country[]) => void
  filterCountries: (query: string) => void
  changeCountryStatus: (id: Country['id'], status: CountryStatus) => void
  favoriteToggle: (id: Country['id']) => void
}

export const useStore = create<StoreState>((set) => ({
  countries: [],
  filteredCountries: [],
  setCountries: (list: Country[]) => set((state) => ({ countries: list })),
  filterCountries: (query: string) =>
    set((state) => ({
      filteredCountries: state.countries.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      ),
    })),
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
}))

export const getFavoriteCountries = (state: StoreState) =>
  state.countries.filter((elem) => elem.isFavorite)
export const getVisitedCountries = (state: StoreState) =>
  state.countries.filter((elem) => elem.status === 'visited')
