import styles from './project.module.scss'
import Container from '../components/Container'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

export default function Projects() {
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

  const projects = [
    {
      name: 'Personal Website',
      link: 'https://markanthonyuy.com/',
      desc: 'This is the version 2 personal website.',
      uses: ['Nextjs', 'Framer'],
    },
    {
      name: 'Bingoo',
      link: 'https://bingoo.now.sh/',
      desc: 'Fun to play Bingo Game.',
      uses: ['Reactjs', 'Framer', 'Styled-Components'],
    },
    {
      name: 'Covid 19 Philippines Tracker',
      link: 'https://covid19.com.ph/',
      desc: 'Dedicated Covid 19 Tracker for Philippines.',
      uses: ['Reactjs', 'Tailwind'],
    },
    {
      name: 'Philippine UITF Listing',
      link: 'https://uitf.now.sh/',
      desc: "Updated market value of UITF's available in the Philippines.",
      uses: ['Reactjs', 'Material UI', 'PWA'],
    },
    {
      name: 'Cryptomark',
      link: 'https://cryptomark.now.sh/',
      desc: 'Compare Cryptocurrencies Realtime.',
      uses: ['Reactjs', 'Bulma'],
    },
    {
      name: 'Pokemon DB',
      link: 'https://pokedb.now.sh/',
      desc: 'Pokemon Database.',
      uses: ['Nextjs', 'Framer', 'Sass'],
    },
    {
      name: 'Dota 2 Leaderboards',
      link: 'https://dota2leaderboards.now.sh/',
      desc: 'List of Dota2 players with the highest Rank.',
      uses: ['Nextjs', 'Framer', 'Serverless'],
    },
    {
      name: 'Dota 2 Earnings',
      link: 'https://dota2earnings.now.sh/',
      desc: 'List of Dota 2 professional players with the highest earnings.',
      uses: ['Nextjs', 'Framer', 'Serverless'],
    },
    {
      name: 'Palitan',
      link: 'https://markanthonyuy.com/palitan/',
      desc: 'Simple currency exchange rate.',
      uses: ['Reactjs'],
    },
    {
      name: 'Manga Libre',
      link: 'https://mangalibre.herokuapp.com/',
      desc: 'Free, fast, simple and straightforward Manga Reader.',
      uses: ['Backbonejs', 'Jquery'],
    },
    {
      name: 'Libre Manga',
      link: 'https://libremanga.herokuapp.com/',
      desc: 'My first manga reader app.',
      uses: ['HTML', 'CSS', 'Jquery'],
    },
    {
      name: 'Marktip',
      link: 'https://markanthonyuy.com/markTip/',
      desc: 'Jquery tootlip plugin.',
      uses: ['Javascript', 'Jquery'],
    },
    {
      name: 'Randomizer',
      link: 'https://markanthonyuy.com/randomizer/',
      desc: 'Random Team Generator.',
      uses: ['HTML', 'CSS', 'Javascript'],
    },
  ]

  return (
    <Container>
      <Nav active="projects" />
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
          made a Manga reader. I was in awe and got really inspired. Since I
          love reading manga, I told myself what is the problem that I mostly
          encounter when doing so. The answers are LOADING SPEED, POOR UI and
          Ads everywhere! If you are reading manga as well, you are definitely
          aware of the problems I just mentioned. Besides, manga images are
          notorious for their large size and it's always bombarded with ads.
          Quite annoying. Though, I don't blame them if that's how they make
          money. Anyway, I just took action on the matter and build my own Manga
          Reader. And <a href="http://libremanga.herokuapp.com/">Libremanga</a>{' '}
          was born. (FYI this is not maintained.) My first web app. Then the
          rest is history :)
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          <p>
            “A problem is a chance for you to do your best.” ― Duke Ellington
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          I like to use different tech/tools when creating my own app. Mix and
          match to see which will be the best fit for the requirements and my
          style. This is one of the great parts of doing your own projects. You
          get to decide which one to use. I'm my own BOSS!
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
          {projects.map((project) => (
            <motion.div variants={item} key={project.name}>
              <a href={project.link} className={styles.title}>
                {project.name}
              </a>
              <span className={styles.desc}>{project.desc}</span>
              <span className={styles.built}>
                {project.uses.map((u, key) => (
                  <span key={`${u}-${key}`}>{u}</span>
                ))}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  )
}
