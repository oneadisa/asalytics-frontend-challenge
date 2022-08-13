/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Assets.module.css'
import {AssetProp} from '../pages/index'

export const Assets = ({asset} : AssetProp ) => {
    return (
        <div className={styles.single}>
            <div className={asset.unitname1} ></div>
            <img src = {asset.logo} width={10} height={10}  alt={asset.unitname1} />
           { asset.available ? 
           <button className='hello' >Availavle</button> : 
           <button className='hello' >Unavailable</button> }
            <div className={asset.name} ></div>
        </div>
    )
}