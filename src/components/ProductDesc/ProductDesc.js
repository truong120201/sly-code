import styles from './ProductDesc.module.css'

import payment1 from '../../assets/image/product-default-1.png'
import payment2 from '../../assets/image/product-default-2.png'
import payment3 from '../../assets/image/product-default-3.png'

import { useState, useEffect, useRef } from 'react'
import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SimpleSlider from '../../components/Slider/Slider.js'


function ProductDesc(props) {

    function handleShowCart(newValue) {
        props.handleShowCart(newValue)
    }

    const [currentProduct, setCurrentProduct] = useState({})

    const [amount, setAmount] = useState(1)

    const handleMinusAmount = () => {
        if (amount > 1) {
            setAmount(prev => prev - 1)
        }
    }

    const handlePlusAmount = () => {
        setAmount(prev => prev + 1)
    }

    function addToCarts(item) {
        var xhttp = new XMLHttpRequest()
        xhttp.open('POST', 'https://sly-json.herokuapp.com/carts', true)
        var data = `id-product=${item.id}&product_name=${item.name}&product_price=${item.price}&product_picture=${item.picture}&amount=${amount}`
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhttp.send(data)
        xhttp.onload = function () {
            if (xhttp.status >= 200 && xhttp.status < 400) {
                handleShowAddToCartsSuccess()
            } else {
                handleShowAddToCartsFail()
            }
        }
    }

    const changedText = useRef();

    const handleShowAddToCartsSuccess = () => {
        changedText.current.innerText = 'ĐÃ THÊM VÀO GIỎ HÀNG'
    }

    const handleShowAddToCartsFail = () => {
        changedText.current.innerText = 'ĐÃ XẢY RA LỖI'
    }

    document.title = `SLY / ${currentProduct.name}`

    useEffect(() => {
        fetch("https://sly-json.herokuapp.com/products/" + props.productID)
            .then(res => res.json())
            .then(
                (result) => {
                    setCurrentProduct(result)
                }
            )

        changedText.current.innerText = 'THÊM VÀO GIỎ HÀNG'
    }, [props.productID])

    return (
        <div className={styles.productDesc}>
            <div className={styles.productMainHeader}>
                <Link to="/" className={styles.linkToHome}>TRANG CHỦ</Link>
                <div className={styles.divider}> / </div>
                <p className={styles.currentPage}>{currentProduct.name}</p>
            </div>
            <div className={styles.sellingPlace}>
                <img src={currentProduct.picture} className={`${styles.productImage} ${styles.sellingPlaceElement}`} />
                <div className={`${styles.productDetail} ${styles.sellingPlaceElement}`}>
                    <p className={styles.productName}>{currentProduct.name}</p>
                    <p className={styles.productPrice}>{currentProduct.price} VNĐ</p>
                    <p className={styles.productsMaterial}>Chất liệu : {currentProduct.material}</p>
                    <div className={styles.payment}>
                        <div className={styles.paymentElement}>
                            <img src={payment1} className={styles.paymentElementPic} />
                            <p className={styles.paymentElementDes}>GIAO HÀNG TOÀN QUỐC</p>
                        </div>
                        <div className={styles.paymentElement}>
                            <img src={payment2} className={styles.paymentElementPic} />
                            <p className={styles.paymentElementDes}>THANH TOÁN KHI NHẬN HÀNG</p>
                        </div>
                        <div className={styles.paymentElement}>
                            <img src={payment3} className={styles.paymentElementPic} />
                            <p className={styles.paymentElementDes}>ĐỔI HÀNG TRONG 7 NGÀY</p>
                        </div>
                    </div>
                    <p className={styles.buyPoint}>Mua sản phẩm này ngay bây giờ và nhận được 5 Sly Points!</p>
                    <div className={styles.addToCartContainer}>
                        <div className={styles.addToCartAmount}>
                            <div onClick={handleMinusAmount} className={styles.addToCartAmountMinus}> - </div>
                            <div className={styles.addToCartAmountNumber}> {amount} </div>
                            <div onClick={handlePlusAmount} className={styles.addToCartAmountPlus}> + </div>
                        </div>
                        <div ref={changedText} onClick={() => {
                            addToCarts(props.product)
                        }} className={styles.addToCartBtn}>THÊM VÀO GIỎ HÀNG</div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.contactElement}>
                            <FontAwesomeIcon className={styles.contactIcon} icon={faPhone} />
                            <p className={styles.contactElementDes}>HOTLINE</p>
                        </div>
                        <div className={styles.contactElement}>
                            <FontAwesomeIcon className={styles.contactIcon} icon={faFacebookF} />
                            <p className={styles.contactElementDes}>MESSENGER</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.productRela}>SẢN PHẨM TƯƠNG TỰ</p>
            <SimpleSlider genreToLoad={currentProduct.genre} />
        </div>
    )
}

export default ProductDesc