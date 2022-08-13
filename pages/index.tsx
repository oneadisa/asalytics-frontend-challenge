import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { Assets } from '../components/Assets'
import { Key } from 'react'

const GET_ASSETS = gql `
query {
 asalist{
  results{
  name
  assetId
  available
  logo
  unitname1
  }
} 
}
`

export type Asset = {

  asset:{
    name: string;
    assetId: string;
    available: boolean;
    logo: string | undefined;
    unitname1: string;
  };
  
    name: string;
    assetId: string;
    available: boolean;
    logo: string | undefined;
    unitname1: string;

}


const Home: NextPage = () => {

  const { data, loading, error } = useQuery(GET_ASSETS);

  console.log({data})

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | ASAlytics Assets</title>
        <meta name="description" content="List of Alogrand Standard Assets on ASAlytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        {error && <div>

  </div>}

  {loading &&  <div>
 
  </div>}
      <div>
      {data.asalist.results.map((asset: Asset) => 
      <Assets key={asset.assetId} asset={asset} />)}
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
