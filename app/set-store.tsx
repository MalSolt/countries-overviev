'use client'
import { useStore } from '@/store/store'
import { ReactNode, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export const SetStore = ({ children }: Props) => {
  const setCountries = useStore((state) => state.setCountries)
  const fetchCountries = useStore((state) => state.fetchCountries)

  useEffect(() => {
    fetchCountries()
  }, [])

  return <div>{children}</div>
}
