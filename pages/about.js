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
          youngest of their children. My wife and I love to travel. We've seen
          the best white sand beaches of the Philippines, to the beautiful
          islands of Maldives, From the futuristic cities of Japan, to the{' '}
          <s> towering Sky Scrappers of New York</s> (trip canceled due to
          COVID-19). We love to explore, chill with nature, marvel at cities
          architecture, learn other cultures and taste the exotic flavor of
          their cuisine, meet different kinds of people and make new friends.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          <p>“Never go on trips with anyone you do not love.” ― Hemmingway</p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          I love playing basketball (I'm a huge NBA fan), reading manga,
          watching anime, Friends, The Big Bang Theory and Dota 2 tournament.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          I also like Ancient History, Astronomy and Physics. From the mystery
          of building the Great Pyramid Giza to the countless posibility of
          another civilization million miles away, to the question of the
          discovery of parallel universe. (I just hope I'm tall, rich and good
          looking man somewhere there. 😂) Those are the questions that makes me
          wonder at night.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          <p>
            “In this bright future you can't forget your past.” ― Bob Marley
          </p>
        </motion.blockquote>

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
          you're having fun. It seems only yesterday when I started converting
          PSD's to HTML as my first web developer job. Then I became a Software
          Engineer in the BPO industry. I got to work with various companies
          there. I work mostly on front-end development because that's where I
          found my passion. I love seeing fast, creative and intuitive websites.
          Google lighthouse is my friend.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <p>
            “Creating a website is a process of setting the right colors to
            define mood and apply the right contrast to emphasize an element,
            implementing the right font sizes to define hierarchy, adding
            animations to symbolize interaction and activity, intuitive enough
            so that visitors understands the flow of the website and faster than
            the speed of light.“ ― Mark Anthony Uy
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          I'm very passionate at what I do even though it's not easy keeping up
          with the technologies. It feels impossible to learn everything but if
          there's one thing I learn from using Linux, it's{' '}
          <b>Do one thing and do it really good</b>. That's the reason I focus
          in the front-end side.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          In the near future, I plan to learn Gatsby, GraphQL, Typscript,
          Strapijs, Redwoodjs, Sveltejs and Figma. This goes with the quote that
          I really love.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <p>
            “If you fail to plan, you are planning to fail.“ ― Benjamin Franklin
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          Wish me luck.
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
          I'm a big fan of open source. I use the following languages,
          libraries, frameworks and tools when creating a website.
        </motion.p>

        <ToolIcons delay={0.7} />

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
        >
          My Website
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.9 } }}
        >
          The new redesign of my website is inspired by my favorite websites. I
          often got my ideas from looking at other people work, then I add my
          own flavor and style to the mix. For example the colored border that
          wrapped the quotes is inspired by Codepen's button, Bigger fonts is
          from Smashing magazine and Design course website. Hopefully, I was
          able to create something cool. If you want a peek of my old design
          here is the <a href="https://markanthonyuy.com/old">link</a> .
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.9 } }}
        >
          <p>
            “Imitation is not just the sincerest form of flattery - it's the
            sincerest form of learning.” ― George Bernard Shaw
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.9 } }}
        >
          I follow a lot of awesome people in the industry, listen to web
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
