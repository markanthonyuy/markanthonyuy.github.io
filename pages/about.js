import styles from './about.module.scss'
import Container from '../components/Container'
import ToolIcons from '../components/ToolIcons'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

export default function About() {
  const PEOPLE = [
    {
      name: 'Wes Bos',
      link: 'https://wesbos.com/',
    },
    {
      name: 'Chris Coyier',
      link: 'https://css-tricks.com/',
    },
    {
      name: 'Brad Traversy',
      link: 'https://traversymedia.com/',
    },
    {
      name: 'Kent Dodds',
      link: 'https://kentcdodds.com/',
    },
  ]

  const PODCAST = [
    {
      name: 'Syntax.fm',
      link: 'https://syntax.fm/',
    },
    {
      name: 'Shop Talk Show',
      link: 'https://shoptalkshow.com/',
    },
    {
      name: 'Front End Happy Hour',
      link: 'https://frontendhappyhour.com/',
    },
  ]

  const INSPIRATIONS = [
    {
      name: 'Codepen',
      link: 'https://codepen.io/',
    },
    {
      name: 'Smashing Magazine',
      link: 'https://www.smashingmagazine.com/',
    },
    {
      name: 'Design Code',
      link: 'https://designcode.io/',
    },
  ]

  const makeList = ({ list, title }) => (
    <>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      >
        {title}
      </motion.h3>
      <motion.ul
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.2 } }}
      >
        {list.map((p, key) => (
          <li key={`${p.name}-${key}`}>
            <a href={p.link} rel="noopener">
              {p.name}
            </a>
          </li>
        ))}
      </motion.ul>
    </>
  )

  return (
    <Container>
      <Nav active="about" />
      <div className={styles.about}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Hello There!
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          I'm Mark a.k.a. "Mac", husband to Bev, son of Tony and Lerma and the
          youngest of their children. Me and my wife loves to travel, We've seen
          the best white sand beaches of the Philippines to the beautiful
          Islands of Maldives. We love to explore, see nature, marvel at
          architectures, learn other cultures and meet different kinds of people
          and make friends.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          I love playing basketball (I'm a huge NBA fan), reading manga,
          watching anime, Friends, The Big Bang Theory and Dota2 tournament.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          I also like Ancient History and Astronomy from studying our history to
          finding out our future. Those are the things that keeps me up at night
          and wonder.
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          Career
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          I've been web developing for 8+ years now. Time does indeed fly when
          your having fun. It seems only yesterday when I started converting
          PSD's to HTML as my first web developer job. I work mostly on frontend
          development because that's where I found my passion. I love seeing
          fast, creative and intuitive websites. Lighthouse is my friend.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <p>
            "Creating a website is a process of setting the right colors to
            define mood and apply the right contrast to give emphasize to an
            element, implementing the right font sizes to define hierarchy,
            adding animations to symbolize interaction and activity, intuitive
            enough so that visitors understands the flow of the website and
            faster than the speed of light." - Mark Anthony Uy
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          I'm very passionate at what I do even though it's not easy keeping up
          with the technologies. It feels impossible to learn everything but if
          there's one thing I learn from using Linux, it's do one thing and do
          it really good. That's why I'm focusing on the frontend side.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          In the near future, I will plan to learn Gatsby, GraphQL, Typscript,
          Strapijs, Redwoodjs, Sveltejs and Figma. Wish me luck!
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          Big fan of open source.
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          Uses
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
        >
          I use the following languages, libraries, frameworks and tools when
          creating a website.
        </motion.p>

        <ToolIcons delay={0.7} />

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
        >
          Website
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.9 } }}
        >
          This redesign of my website is inspired by many website. I often got
          my idea from looking at other people work and add my own flavor. I
          follow a lot of really cool people in the industry, listen to web
          development podcasts and read blogs. If you want to check them out
          here are some.
        </motion.p>

        {makeList({ list: PEOPLE, title: 'People' })}
        {makeList({ list: PODCAST, title: 'Podcast' })}
        {makeList({ list: INSPIRATIONS, title: 'Inspirations' })}
      </div>
    </Container>
  )
}
