import styles from './container.module.scss'
import Footer from '../components/Footer'

export default function Container({ children }) {
  return (
    <div className={styles.outer}>
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  )
}
