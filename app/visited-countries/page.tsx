import { VisitedCountries } from '@/components/countries-lists/visited'
import Link from 'next/link'

export default async function Page() {
  return (
    <main>
      <VisitedCountries />
    </main>
  )
}
