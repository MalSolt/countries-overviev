import { Country, CountryStatus, useStore } from '@/store/store'
import { ChangeEvent, useState } from 'react'

type Props = Pick<Country, 'id' | 'status'>

export const ChangeCountryStatus = ({ id, status }: Props) => {
  const [value, setValue] = useState<CountryStatus>(status)
  const changeCountryStatus = useStore((state) => state.changeCountryStatus)

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as CountryStatus
    changeCountryStatus(id, newStatus)
    setValue(newStatus)
  }

  return (
    <select value={value} onChange={onChange}>
      <option value={CountryStatus.Visited}>{CountryStatus.Visited}</option>
      <option value={CountryStatus.NotVisited}>{CountryStatus.NotVisited}</option>
    </select>
  )
}
