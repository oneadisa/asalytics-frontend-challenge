/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Assets.module.css'

type Asset = {
  asset:{
    name: string;
    assetId: string;
    available: boolean;
    logo: string | undefined;
    unitname1: string;
  };
}

export const Assets = ({asset} : Asset ) => {
    return (
        <div className={styles.low}>
            <div className={asset.unitname1} ></div>
            <img src = {asset.logo} width={100} height={100}  alt={asset.unitname1} />
           { asset.available ? <div className='hello' ></div> : <div className='hello' ></div> }
            <div className={asset.name} ></div>
        </div>
    )
}