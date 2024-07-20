type FetchCountriesResponse = {
  name: {
    common: string
    official: string
  }
  idd: {
    root: string
    suffixes: string[]
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  capital: string[]
  flags: {
    svg: string
    png: string
  }
}

export const fetchCountries = async (): Promise<FetchCountriesResponse[]> => {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,idd,currencies,capital,flags'
  )
  const data: FetchCountriesResponse[] = await response.json()
  return data
}
