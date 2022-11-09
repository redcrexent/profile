import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Taha Akhtar&apos;s portfolio</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <div className='bg-black text-white h-screen'>
        <Header />

        <Hero />

      </div>
      {/* about  */}

      {/* Experience  */}
      {/* Projects */}
      {/* skills  */}

      {/* Contact  */}
    </>
  )
}
export default Home;