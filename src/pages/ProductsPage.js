import styles from './ProductsPage.module.css'

import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react'

function ProductsPage(props) {

    const [products, setProducts] = useState([])

    const [limitedProductsShow, setLimitedProductsShow] = useState(12)

    const handleLimited = () => {
        setLimitedProductsShow(prev => prev + 8)
    }

    useEffect(() => {

        document.title = `SLY / ${props.productGenres}`

        fetch("https://sly-json.herokuapp.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result)
                }
            )
    }, [props.productGenres]);

    const productsToRender = (props.productGenres === "all") ? products : products.filter((item, index) => item.genre === props.productGenres)


    return (
        <div className={styles.productsPage}>
            <div className={styles.productsHeader}>
                <p className={styles.productHeaderGenre}>{props.header}</p>
                <div className={styles.productHeaderSocialMedia}>
                    <a href='' className={styles.socialMediaLink}><FontAwesomeIcon className={`${styles.socialMediaIcon} ${styles.iconFacebook}`} icon={faFacebookF} /></a>
                    <a href='' className={styles.socialMediaLink}><FontAwesomeIcon className={`${styles.socialMediaIcon} ${styles.iconPinterest}`} icon={faPinterest} /></a>
                </div>
            </div>
            <div className={styles.productMainHeader}>
                <Link to="/" className={styles.linkToHome}>TRANG CHỦ</Link>
                <div className={styles.divider}> / </div>
                <p className={styles.currentPage}>{props.header}</p>
            </div>
            <div className={styles.productsPageMain}>
                {
                    productsToRender.slice(0, limitedProductsShow).map((product, index) => {
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
            {
                productsToRender.length > limitedProductsShow &&
                <div className={styles.loadMoreBtn} onClick={handleLimited}>XEM THÊM</div>
            }
        </div>
    )
}

export default ProductsPage