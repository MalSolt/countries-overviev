import { Country, CountryStatus } from '@/store/store'
import styles from './country-card.module.css'
import { Detail } from './detail'
import { ChangeCountryStatus } from './actions/change-status'
import { FavoriteToggle } from './actions/favorite-toggle'
import { AddVisitedDates } from './actions/add-visited-dates'

export const CountryCard = ({
  name,
  code,
  currency,
  capital,
  flag,
  id,
  isFavorite,
  status,
  visitedDates,
}: Country) => {
  return (
    <div className={styles.container}>
      <div>
        <Detail label='name' value={name} />
        <Detail label='code' value={code} />
        <Detail label='currency' value={currency} />
        <Detail label='capital' value={capital} />
        <Detail label='flag' value={flag} />
      </div>
      <div className={styles.actions}>
        {status === CountryStatus.Visited && (
          <AddVisitedDates id={id} visitedDates={visitedDates} />
        )}
        <ChangeCountryStatus id={id} status={status} />
        <FavoriteToggle id={id} isFavorite={isFavorite} />
      </div>
    </div>
  )
}
