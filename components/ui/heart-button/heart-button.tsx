'use client'

import { ButtonHTMLAttributes, useState } from 'react'
import styles from './heart-button.module.css'

type Props = { liked: boolean } & ButtonHTMLAttributes<HTMLButtonElement>

export const HeartButton = ({ liked, disabled, onClick, ...rest }: Props) => {
  return (
    <button
      {...rest}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${styles.heart} ${liked ? styles.liked : ''} ${disabled ? styles.disabled : ''}`}
    >
      ❤
    </button>
  )
}
