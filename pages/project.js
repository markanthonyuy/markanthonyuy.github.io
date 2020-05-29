import styles from './project.module.scss'
import Container from '../components/Container'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

export default function Project() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <Container>
      <Nav active="project" />
      <div className={styles.project}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          My Work
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          This is the list of my personal projects.
        </motion.p>

        <motion.div
          className={styles.list}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <a href="https://bingoo.now.sh/" className={styles.title}>
              Bingoo
            </a>
            <span className={styles.desc}>Fun to play Bingo Game.</span>
            <span className={styles.built}>
              <span>Reactjs</span> <span>Framer</span>{' '}
              <span>Styled-Components</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://covid19.com.ph/" className={styles.title}>
              Covid 19 Philippines Tracker
            </a>
            <span className={styles.desc}>
              Dedicated Covid 19 Tracker for Philippines.
            </span>
            <span className={styles.built}>
              <span>Reactjs</span> <span>Tailwind</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://uitf.now.sh/" className={styles.title}>
              Philippine UITF Listing
            </a>
            <span className={styles.desc}>
              Updated market value of UITF's available in the Philippines.
            </span>
            <span className={styles.built}>
              <span>Reactjs</span> <span>Material UI</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://cryptomark.now.sh/" className={styles.title}>
              Cryptomark
            </a>
            <span className={styles.desc}>
              Compare Cryptocurrencies Realtime.
            </span>
            <span className={styles.built}>
              <span>Reactjs</span> <span>Bulma</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://pokedb.now.sh/" className={styles.title}>
              Pokemon DB
            </a>
            <span className={styles.desc}>Pokemon Database.</span>
            <span className={styles.built}>
              <span>Nextjs</span> <span>Framer</span> <span>Sass</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="https://dota2leaderboards.now.sh/"
              className={styles.title}
            >
              Dota 2 Leaderboards!
            </a>
            <span className={styles.desc}>
              List of Dota2 players with the highest Rank.
            </span>
            <span className={styles.built}>
              <span>Nextjs</span> <span>Framer</span> <span>Serverless</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://dota2earnings.now.sh/" className={styles.title}>
              Dota 2 Earnings!
            </a>
            <span className={styles.desc}>
              List of Dota 2 professional players with the highest earnings.
            </span>
            <span className={styles.built}>
              <span>Nextjs</span> <span>Framer</span> <span>Serverless</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="https://markanthonyuy.com/palitan/"
              className={styles.title}
            >
              Palitan
            </a>
            <span className={styles.desc}>Simple currency exchange rate.</span>
            <span className={styles.built}>
              <span>Reactjs</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="https://mangalibre.herokuapp.com/"
              className={styles.title}
            >
              Manga Libre
            </a>
            <span className={styles.desc}>
              Free, fast, simple and straightforward Manga Reader.
            </span>
            <span className={styles.built}>
              <span>Backbonejs</span> <span>Jquery</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a href="http://libremanga.herokuapp.com/" className={styles.title}>
              Libre Manga
            </a>
            <span className={styles.desc}>My first manga reader app.</span>
            <span className={styles.built}>
              <span>HTML</span> <span>CSS</span> <span>Jquery</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="https://markanthonyuy.com/markTip/"
              className={styles.title}
            >
              Marktip
            </a>
            <span className={styles.desc}>Jquery tootlip plugin.</span>
            <span className={styles.built}>
              <span>Javascript</span> <span>Jquery</span>
            </span>
          </motion.div>
          <motion.div variants={item}>
            <a
              href="https://markanthonyuy.com/randomizer/"
              className={styles.title}
            >
              Randomizer
            </a>
            <span className={styles.desc}>Random Team Generator.</span>
            <span className={styles.built}>
              <span>HTML</span> <span>CSS</span> <span>Javascript</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  )
}
