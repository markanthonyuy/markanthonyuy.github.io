import styles from './footer.module.scss'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Mark Anthony Uy &copy; {year}</p>
    </footer>
  )
}
