import { AllCountries } from '@/components/countries-lists/all'
import Link from 'next/link'

export default async function Home() {
  return (
    <main>
      <AllCountries />
    </main>
  )
}
