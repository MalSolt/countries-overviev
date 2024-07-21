'use client'

import { HeartIcon } from '@/components/ui/heart-icon/heart-icon'
import { Country, useStore } from '@/store/store'
import { usePathname } from 'next/navigation'

type Props = Pick<Country, 'id' | 'isFavorite'>

export const FavoriteToggle = ({ id, isFavorite }: Props) => {
  const pathname = usePathname()
  const favoriteToggle = useStore((state) => state.favoriteToggle)
  const onClick = () => favoriteToggle(id)
  const disabled = pathname === '/favorite-countries'

  return <HeartIcon liked={isFavorite} onClick={onClick} disabled={disabled} />
}
