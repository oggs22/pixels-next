import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import usePixels from '../hooks/usePixels'
import metamaskLogo from '../public/images/metamask-logo.png'

export default function Home() {

  const {
    data
  } = usePixels()

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="p-6 max-w-sm mx-auto bg-blue-500 rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image src={metamaskLogo} alt="ChitChat Logo" width={72} height={72} className="h-12 w-12" />
          </div>
          <div>
            <div className="text-xl font-medium text-white">Metamask</div>
            <p className="text-white">Connect</p>
          </div>
        </div>
      </div>
    </div>
  )
}
