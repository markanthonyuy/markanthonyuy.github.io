import { useEffect } from 'react'
import styles from './main.module.scss'
import Nav from '../components/Nav'
import ToolIcons from '../components/ToolIcons'
import Container from '../components/Container'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Container>
      <Nav active="home" />
      <div className={styles.home}>
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
          Welcome to my site. I'm a Software Engineer specializing in front-end
          development. I like to travel, spend time with my family and friends,
          and create a bunch of web apps.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          It excites me knowing that every day is an opportunity to learn new
          things.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          Some of the languages, libraries, frameworks and tools that I'm using.
        </motion.p>

        <ToolIcons preview />
      </div>
    </Container>
  )
}
