import { isImgUrl } from '@/utils/utils'
import styles from './country-card.module.css'
import Image from 'next/image'

type Props = { label: string; value: string }

export const Detail = ({ label, value }: Props) => (
  <div className={styles.detail}>
    <span className={styles.detailLabel}>{label}</span>
    {isImgUrl(value) ? (
      <Image src={value} width={20} height={12} alt='flag' />
    ) : (
      <span>{value}</span>
    )}
  </div>
)
