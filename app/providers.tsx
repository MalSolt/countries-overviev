'use client'

import { SnackbarProvider } from 'notistack'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

export const Providers = ({ children }: Props) => {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
}
