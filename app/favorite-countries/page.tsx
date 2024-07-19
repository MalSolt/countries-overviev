import { FavoriteCountries } from '@/components/countries-lists/favorites'
import Link from 'next/link'

export default async function Page() {
  return (
    <main>
      <FavoriteCountries />
    </main>
  )
}
