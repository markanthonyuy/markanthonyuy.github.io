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
        delay: 0.7,
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

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Professional
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          I'm currently maintaining and developing an ecommerce site.
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          Personal
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          During my pastime I like to think of how can I solve problems. Just
          simple problems that I'm having. I remember a colleague of mine first
          made a Manga reader. I was in awe and got really inspired from that
          day. I told myself that since I love reading manga I thought of the
          problem that I always encounter. It's LOADING SPEED, POOR UI and Ads
          Ads Ads! If you're reading manga definitely you are aware of these
          problems, besides manga images are extemely huge the sites are always
          bombarded with ads. Quite annoying. I don't blame them though if
          that's their monitezation strategy. Anyway, I just took actions of the
          matter and build my own Manga Reader. And{' '}
          <a href="http://libremanga.herokuapp.com/">Libremanga</a> was born.
          (FYI this is not maintained) My first web app. Then the rest is
          history :)
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          I like to use different tech/tools when creating my own app. Mix and
          match to see which one will fit my style. This is one of the great
          parts of doing your own projects. You get to decide which one to use.
          I'm my own BOSS!
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          Here are some of my personal projects. Or you can check out my{' '}
          <a href="https://github.com/markanthonyuy">github account</a>.
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
              <span>Reactjs</span> <span>Material UI</span> <span>PWA</span>
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
