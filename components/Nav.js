import styles from './Nav.module.scss'

export default function Nav({ active }) {
  return (
    <nav className={styles.nav}>
      <a className={active === 'home' ? styles.active : ''} href="/">
        Home
      </a>
      <a className={active === 'about' ? styles.active : ''} href="/about">
        About
      </a>
      <a className={active === 'project' ? styles.active : ''} href="/project">
        Projects
      </a>
      <a className={active === 'contact' ? styles.active : ''} href="/contact">
        Contact
      </a>
    </nav>
  )
}
