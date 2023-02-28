import Head from 'next/head';
import NavBar from "./components/(navbar)"
import FrontPage from './components/(frontpage)';
import OurTeam from './components/(ourteam)';
import HowItWorks from './components/(howitworks)';
import GettingStarted from './components/(gettingstarted)';
import styles from '../styles/Home.module.css';

//displaying all the components on the root html
export default function Home() {
  return (
    <>
      <Head>
        <title>Aionic</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Start managing managing your kubernetes manifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <NavBar/>
        <div className={styles.mainContainer}>
          <FrontPage/>
          <HowItWorks/>
          <GettingStarted/>
          <OurTeam/>
        </div>
      </main>
    </>
  )
}
