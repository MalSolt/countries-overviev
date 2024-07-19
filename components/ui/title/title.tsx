import { ReactNode } from 'react'
import styles from './title.module.css'

type Props = {
  children: string
}

export const Title = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>
}
