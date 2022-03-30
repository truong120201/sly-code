import styles from './Navigation.module.css'

import React from 'react';
import ReactDOM from 'react-dom';

import allProductImg from '../../assets/image/all-product.svg'
import hoodie from '../../assets/image/Hoodie.svg'
import sweater from '../../assets/image/Sweater.svg'
import accessories from '../../assets/image/accessories.svg'
import bottom from '../../assets/image/Bottom.svg'
import jacket from '../../assets/image/Jacket.svg'
import tShirt from '../../assets/image/t-shirt.svg'

import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div className={styles.navigation}>
            <NavLink to='/all-products' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={allProductImg} />
            </NavLink>
            <NavLink to='/hoodie' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={hoodie} />
            </NavLink>
            <NavLink to='/sweater' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={sweater} />
            </NavLink>
            <NavLink to='/t-shirt' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={tShirt} />
            </NavLink>
            <NavLink to='/jacket' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={jacket} />
            </NavLink>
            <NavLink to='/bottoms' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={bottom} />
            </NavLink>
            <NavLink to='/accessories' className={styles.navigationElement} activeclassname="active">
                <img className={styles.navImage} src={accessories} />
            </NavLink>
            <div className={`${styles.navigationElement} ${styles.navigationElementLinkShopee}`}>
                <a href='shopee.vn' className={styles.shopeeLink}>SHOPEE</a>
            </div>
        </div>
    )
}

export default Navigation