import styles from './main.module.scss'
import Nav from '../components/Nav'
import ToolIcons from '../components/ToolIcons'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.outer}>
      <main className={styles.container}>
        <Nav />
        <motion.figure
          className={styles.image}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <img src="/me.jpg" alt="Mark Anthony Uy's Picture" />
          <span className={styles.tagline}>
            <span>Learning never stops.</span>
          </span>
        </motion.figure>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Hi! I'm Mark.
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Welcome to my site. I'm a Software Engineer specializing in frontend
          development. I like to travel, watch e-sports dota2 and create a bunch
          of web apps. Have a look around and make your self comfortable. It
          excites me knowing that everyday is another opportunity to learn new
          things.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          I work mostly work using these awesome tools!
        </motion.p>

        <ToolIcons />

        <p className={styles.note}> Mark Anthony Uy &copy; 2020</p>
      </main>
    </div>
  )
}
