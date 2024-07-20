import { ChangeEvent, InputHTMLAttributes } from 'react'
import styles from './text-field.module.css'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange: (value: string) => void
}

export const TextField = ({ onChange, ...rest }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return <input className={styles.input} type='text' {...rest} onChange={handleChange} />
}
