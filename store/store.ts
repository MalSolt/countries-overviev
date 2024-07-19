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
  setCountries: (list: Country[]) => void
  changeCountryStatus: (id: Country['id'], status: CountryStatus) => void
  favoriteToggle: (id: Country['id']) => void
  addVisitedDate: (id: Country['id'], date: string) => void
}

export const useStore = create<StoreState>((set) => ({
  countries: [],
  setCountries: (list: Country[]) => set((state) => ({ countries: list })),
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
