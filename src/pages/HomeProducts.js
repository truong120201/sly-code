import SimpleSlider from '../components/Slider/Slider.js'
import { useState, useEffect } from 'react'
import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import bannerLeft from '../assets/image/home-backgr-left.jpg'
import bannerRight from '../assets/image/home-backgr-right.jpg'

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './HomeProducts.module.css'


function HomeProducts() {

    const [products, setProducts] = useState([])

    document.title = `SLY CLOTHING`

    useEffect(() => {
        fetch("https://sly-json.herokuapp.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result)
                }
            )
    }, [])

    const productsToRender = products.slice(0).reverse()

    return (
        <div className={styles.homeMain}>

            <p className={styles.homeNewHeader}>
                MỚI NHẤT
            </p>

            <div className={styles.productsPageMain}>
                {
                    productsToRender.slice(0, 16).map((product, index) => {
                        return (
                            <div key={index} className={styles.productsPageMainElement}>
                                {
                                    <Link to={`/${product.id}`} className={styles.productsPageElement}>
                                        <img src={product.picture} className={styles.productImage} />
                                        <p className={styles.productName}>{product.name}</p>
                                    </Link>
                                }
                                <p className={styles.productPrice}>{product.price} VNĐ</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.banner}>
                <div className={styles.bannerElement}>
                    <img src={bannerLeft} className={styles.bannerImg} />
                    <div className={`${styles.bannerAbout} ${styles.bannerAboutLeft}`}>
                        <p className={styles.bannerAboutHeader}>SLY HOME</p>
                        <p className={styles.bannerAboutDesc}>THAM GIA GROUP FACEBOOK CÙNG SLY</p>
                        <a href='' className={`${styles.linkToFB} ${styles.linkToFBIconLeft}`}>
                            <FontAwesomeIcon icon={faFacebookF} className={styles.linkToFBIcon} />
                            <p className={styles.linkToFBDesc}>THAM GIA</p>
                        </a>
                    </div>
                </div>
                <div className={styles.bannerElement}>
                    <img src={bannerRight} className={styles.bannerImg} />
                    <div className={`${styles.bannerAbout} ${styles.bannerAboutRight}`}>
                        <p className={styles.bannerAboutHeader}>SLY MARKETPLACE</p>
                        <p className={styles.bannerAboutDesc}>NƠI TRAO ĐỔI MUA BÁN SẢN PHẨM CỦA SLY</p>
                        <a href='' className={styles.linkToFB}>
                            <FontAwesomeIcon icon={faFacebookF} className={styles.linkToFBIcon} />
                            <p className={styles.linkToFBDesc}>THAM GIA</p>
                        </a>
                    </div>
                </div>
            </div>

            <p className={styles.homeNewHeader}>
                PHỤ KIỆN
            </p>

            <SimpleSlider genreToLoad="accessories" />
        </div>
    )
}

export default HomeProducts