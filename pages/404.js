import Head from 'next/head'
import Container from '../components/Container'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <Container>
      <Head>
        <meta
          name="description"
          content="Only a few are able to see this page. The Lost, The Explorers, The Wanderers, The Thinkerers, The Hackers who constantly look for possible penetration to my code. (Just check out my Github to make your life easier. 😉) or Maybe you just simply made a typo, let me call you The Typo Maker!"
        ></meta>
        <title>404 - Page Not Found | Mark Anthony Uy</title>
      </Head>
      <Nav />
      <style jsx>{`
        div.error {
          padding-top: 50px;
        }
      `}</style>
      <div className="error">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          404! Are you lost?
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          I've been there. You can click the links above to guide your way back.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Only a few are able to see this page. <b>The Lost</b>,{' '}
          <b>The Explorers</b>, <b>The Wanderers</b>, <b>The Thinkerers</b>,{' '}
          <b>The Hackers</b> who constantly look for possible penetration to my
          code. (Just check out{' '}
          <a href="https://github.com/markanthonyuy">my Github</a> to make your
          life easier. 😉) or Maybe you just simply made a typo, let me call you{' '}
          <b>The Typo Maker!</b>.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        >
          Let me just share to you my life story.
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          My Story
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          My life has been an uphill battle. Living in a third world country
          isn't easy. I remember the time when we just try to survive each day.
          My father had a stroke when I was 10 years old and he was the source
          of our living. By the time I went to study college we really had no
          money. Luckily my parents set up a college fund for me when they still
          have money. Then we were forced out of our house. Some of our
          relatives helped by letting us stay in their houses for a period of
          time. I'm will be forever grateful for that. This is also the time I
          suffered from depression. I stopped all my hobbies, I stopped eating,
          it feels like I lost my purpose. I just want to stop all the pain and
          adversities and end my life. Then my mom got a stage 3 cancer. Seems
          like everything is falling into pieces.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          But hey, I survive that, I found my path to redemption. And I know you
          will too. It's not going to be easy, just hang in there. Feel free to
          reach out to me anytime if you need someone to talk to.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <p>”Fall down seven times, stand up eight.” ― Proverb</p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          Now I'm happily married. I still can't afford to buy a house, but who
          knows? One day, I'm sure it'll come. I moved on from all hardships I
          experience. I still have problems of my own, and sometimes demons from
          my past still haunt me. But every day, I keep reminding myself that
          there is light at the end of the tunnel.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <p>
            ”As I walk through the valley of the shadow of death, I will fear no
            evil.” ― Psalm 23:4
          </p>
        </motion.blockquote>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          And always remember.
        </motion.p>

        <motion.blockquote
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        >
          <p>
            ”What Doesn't Kill You Makes You Stronger.” ― German Philosopher
          </p>
        </motion.blockquote>
      </div>
    </Container>
  )
}
