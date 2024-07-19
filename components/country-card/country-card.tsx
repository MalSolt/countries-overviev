import { Country } from '@/store/store'
import styles from './country-card.module.css'
import { Detail } from './detail'
import { ChangeCountryStatus } from './actions/change-status'
import { FavoriteToggle } from './actions/favorite-toggle'

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
      <ChangeCountryStatus id={id} status={status} />
      <FavoriteToggle id={id} isFavorite={isFavorite} />
    </div>
  )
}
