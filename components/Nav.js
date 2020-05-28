import styles from './Nav.module.scss'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className="home">
        Home
      </a>
      <a href="#" className="about">
        About
      </a>
      <a href="#" className="project">
        Projects
      </a>
      <a href="#" className="contact">
        Contact
      </a>
    </nav>
  )
}
