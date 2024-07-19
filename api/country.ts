type Response = {
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

export const fetchCountriesData = async (): Promise<Response[]> => {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,idd,currencies,capital,flags'
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Response[] = await response.json()
  return data
}
