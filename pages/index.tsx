import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeamLitho | Not Available</title>
        <meta name="description" content="TeamLitho | Developers - Advanced Platform For Developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Not Available!
        </h1>

        <p className={styles.description}>
          Our website is currently unavailable Please try again later. Thank you for your understanding
          <code className={styles.code}>.</code>
        </p>

        <div className={styles.grid}>
          <a href="https://techtack-technologies.com/home.html" className={styles.card}>
            <h2>Official Website &rarr;</h2>
            <p>Most Advanced Platform For Developers.</p>
          </a>

          <a href="https://github.com/drjoeycadieux/team-litho" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Our website is publicly available to anyone.</p>
          </a>

          <a
            href="https://stackoverflow.com/users/12696830/joey-cadieux"
            className={styles.card}
          >
            <h2>Stackoverflow &rarr;</h2>
            <p>TeamLitho | Developers - Advanced Platform For Developers</p>
          </a>

          <a
            href="https://www.netlify.com/"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              We use netlify to deploy our site.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
         <p className={styles.p}>
           Techtack-technologies &copy; Powered By<a href="https://portal3.techtack-technologies.com">TeamLitho</a>
         </p>
      </footer>
    </div>
  )
}

export default Home
