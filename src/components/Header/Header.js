

import logoShop from '../../assets/image/logo_sly-seo.png'
import styles from './Header.module.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faSearch, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'


function Header(props) {

    function handleShowLogIn(newValue) {
        props.handleShowLogIn(newValue)
    }

    function handleShowSearch(newValue) {
        props.handleShowSearch(newValue)
    }

    function handleShowCart(newValue) {
        props.handleShowCart(newValue)
    }

    function handleShowMobileSideBars(newValue) {
        props.handleShowMobileSideBars(newValue)
    }

    return (
        <div className={styles.header}>
            <FontAwesomeIcon
                className={`${styles.headerMobileBtn} ${styles.headerBarsBtn} ${styles.headerBtn}`}
                icon={faBars}
                onClick={() => handleShowMobileSideBars(true)}
            />
            <Link to='/' className={styles.homeLink}>
                <img className={styles.logoShop} src={logoShop} />
            </Link>
            <div className={styles.headerSide}>
                <div
                    onClick={() => handleShowLogIn(true)}
                    className={`${styles.headerBtn} ${styles.fontSize13} ${styles.hiddenMobileBtn}`}>
                    ĐĂNG NHẬP / ĐĂNG KÝ
                </div>
                <FontAwesomeIcon
                    onClick={() => handleShowSearch(true)}
                    className={`${styles.headerBtn} ${styles.hiddenMobileBtn}`}
                    icon={faSearch}
                />
                <FontAwesomeIcon
                    onClick={() => handleShowCart(true)}
                    className={styles.headerBtn}
                    icon={faCartShopping}
                />
            </div>
        </div>

    )
}

export default Header