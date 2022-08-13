// import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { Assets } from '../components/Assets'
import Loader from '../components/Loader'
import ErrorMessage from '../components/Error'
import Link from 'next/link'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import error from 'next/error'



export async function getServerSideProps() {
    const { loading, error, data } = await client.query({
      query: gql`
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
      `,
    });
    console.log({loading, error, data})

    return {
      props: {
        loading,
        assets: data.asalist.results.slice(0, 14),
      },
   };
}



// const GET_ASSETS = gql `
// query {
//  asalist{
//   results{
//   name
//   assetId
//   available
//   logo
//   unitname1
//   }
// } 
// }
// `
export type Asset = {

  
    name: string;
    assetId: string;
    available: boolean;
    logo: string | undefined;
    unitname1: string;

}

export interface AssetProp {

  asset: Asset
}

interface Error {
     graphQLErrors: {
      message: string;
      locations: 
        {
          line: number;
          column: number;
        } []
     } []
  }
interface Assets {

  assets: Asset [],
  loading: boolean;
  error: Error

}





interface Country {
  code: string;
  emoji: string
  name: string;
}

interface Countries {
countries: Country []
}


const Home = ({assets, error, loading} : Assets ) => {

  // const { data, loading, error } = useQuery(GET_ASSETS);

  console.log({loading, error, assets})

  
  return (
    <>
      <Head>
        <title>Home | ASAlytics Assets</title>
        <meta name="description" content="List of Alogrand Standard Assets on ASAlytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar/>
        {error && <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>}

  {loading ? <Loader/> : (
      <div className={styles.grid}>
      {assets.map((asset: Asset) => 
      <Assets key={asset.assetId} asset={asset} />)}
      </div>
      
  )} 
{/* <div className={styles.grid}>
  {countries.map((country: Country) => (
    <div key={country.code} className={styles.card}>
      <h3><a href="#country-name" aria-hidden="true" className="aal_anchor" id="country-name"><svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>{country.name}</h3>
      <p>
        {country.code} - {country.emoji}
      </p>
    </div>
  ))}
</div> */}
<div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

export default Home
