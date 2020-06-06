import '../global.scss'
import Head from 'next/head'

const DESC =
  "Mark Anthony Uy is a Senior Frontend Developer from the Philippines. If you like coding let's talk. 😊"
const TITLE =
  'Mark Anthony Uy - Software Engineer, Web Developer, Front-end | HTML, CSS, Javascript, Reactjs, Nodejs, Nextjs, PHP, SASS, GIT, Bash, Linux, JAMSTACK, UI, UX and more.'
const URL = 'https://markanthonyuy.com'
const PREVIEW_IMG = `${URL}/preview.png`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:image" content={PREVIEW_IMG} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESC} />
        <meta property="twitter:image" content={PREVIEW_IMG} />
        <meta name="description" content={DESC}></meta>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
