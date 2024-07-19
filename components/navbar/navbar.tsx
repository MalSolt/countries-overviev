'use client'
import Link from 'next/link'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'

const links = [
  { text: 'home', href: '/' },
  { text: 'favorites', href: '/favorite-countries' },
  { text: 'visited', href: '/visited-countries' },
]

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.navbar}>
      {links.map((link) => (
        <Link
          key={link.href}
          className={pathname === link.href ? styles.active : ''}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}
