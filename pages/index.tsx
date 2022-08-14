
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { Assets } from '../components/Assets'
import Loader from '../components/Loader'
// import ErrorMessage from '../components/Error'
// import Link from 'next/link'
import { gql } from "@apollo/client";
import client from "../apollo-client";




export async function getStaticProps() {
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
        assets: data.asalist.results.slice(0, 16),
      },
   };
}



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


const Home = ({assets, loading} : Assets ) => {

  // const { data, loading, error } = useQuery(GET_ASSETS);

  console.log({loading, assets})

  
  return (
    <>
      <Head>
        <title>Home | ASAlytics Assets</title>
        <meta name="description" content="List of Alogrand Standard Assets on ASAlytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar/>
        {/* {error && <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>} */}

  {loading ? <Loader/> : (<>
      <h1 className={styles.title}>List Of Alogrand Standard Assets <br/> on ASAlytics</h1>
      <div className={styles.assetContainer}>
      {assets.map((asset: Asset) => 
      <Assets key={asset.assetId} asset={asset} />)}
      </div>
      </>
  )} 

    </>
  )
}

export default Home
