import { Country, useStore } from '@/store/store'
import { ChangeEvent, useState } from 'react'

type Props = Pick<Country, 'id' | 'visitedDates'>

export const AddVisitedDates = ({ id, visitedDates }: Props) => {
  const addVisitedDate = useStore((state) => state.addVisitedDate)
  const [currentDate, setCurrentDate] = useState('')

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value)
  }

  const handleAddDate = () => {
    if (currentDate && !visitedDates.includes(currentDate)) {
      addVisitedDate(id, currentDate)
      setCurrentDate('')
    }
  }

  return (
    <div>
      <input type='date' value={currentDate} onChange={handleDateChange} />
      <button onClick={handleAddDate}>Add Date</button>
      <ul>
        {visitedDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  )
}
