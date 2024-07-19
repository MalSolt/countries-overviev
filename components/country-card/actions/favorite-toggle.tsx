'use client'

import { HeartButton } from '@/components/ui/heart-button/heart-button'
import { Country, useStore } from '@/store/store'
import { usePathname } from 'next/navigation'

type Props = Pick<Country, 'id' | 'isFavorite'>

export const FavoriteToggle = ({ id, isFavorite }: Props) => {
  const pathname = usePathname()
  const favoriteToggle = useStore((state) => state.favoriteToggle)
  const onClick = () => favoriteToggle(id)
  const disabled = pathname === '/favorite-countries'

  return <HeartButton liked={isFavorite} onClick={onClick} disabled={disabled} />
}
