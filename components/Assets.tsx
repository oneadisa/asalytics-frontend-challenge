/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Assets.module.css'
import {AssetProp} from '../pages/index'

export const Assets = ({asset} : AssetProp ) => {
    return (
        <div className={styles.assetBox}>
          <div className={styles.assetItem}>
            {asset.logo === null ? 
            <img src = '/alogrand.png' width={40} height={40}  alt={asset.unitname1} /> 
            :<img src = {asset.logo} width={30} height={30}  alt={asset.unitname1} />}
            <p>{asset.name}</p>
           { asset.available ? 
           <button className={styles.available} >Available</button> : 
           <button className={styles.unavailable} >Unavailable</button> }
            </div>
        </div>
    )
}