import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import usePixels from '../hooks/usePixels'
import metamaskLogo from '../public/images/metamask-logo.png'
import Navbar from '../components/Navbar'

export default function Home() {

  // const {
  //   data
  // } = usePixels()

  return (
    <div className="h-screen">
      <Head>
        <title>Million Pixels</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar/>
      <main>
        <h1>Todo App</h1>
      </main>
    </div>
  )
}
