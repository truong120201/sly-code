import styles from './Cart.module.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';

function Cart(props) {

    function handleShowCart(newValue) {
        props.handleShowCart(newValue)
    }

    const [carts, setCarts] = useState({
        carts: [],
        isEmptyCart: true
    })


    function getItems() {
        fetch("https://sly-json.herokuapp.com/carts")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length > 0) {
                        setCarts({
                            carts: [ ...result],
                            isEmptyCart: false
                        })
                    } else {
                        setCarts({
                            carts: [...result],
                            isEmptyCart: true
                        })
                    }
                }
            )
    }

    useEffect(() => {
        getItems()
    }, [])

    function removeFromCarts(item) {
        var xhttp = new XMLHttpRequest()
        xhttp.open('DELETE', 'https://sly-json.herokuapp.com/carts/' + item, true)
        xhttp.send()
        xhttp.onload = function () {
            if (xhttp.status == 200) {
                getItems()
            } else {
                console.log('There was an error retrieving the public IP.');
            }
        }
    }


    const sum = carts.carts.reduce(function (acc, obj) { return acc + parseInt(obj.product_price.replace(/[.]/g, '')) * obj.amount; }, 0);

    return (
        <div className={styles.cartModal}>
            <FontAwesomeIcon
                className={styles.logInCloseBtn}
                onClick={() => handleShowCart(false)}
                icon={faTimes}
            />
            <div className={styles.cartElement}>
                <p className={styles.cartHeading}>GIỎ HÀNG</p>
                <div className={styles.divider}></div>
                {
                    !carts.isEmptyCart && <div className={styles.cartProductElement}>
                        <div className={styles.products}>
                            {
                                carts.carts.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.productElement}>
                                            <img className={styles.productCartImage} src={item.product_picture} />
                                            <div className={styles.productDes}>
                                                <p className={styles.productName}>{item.product_name}<span className={styles.productSize}></span></p>
                                                <p className={styles.productAmountAndPrice}><span className={styles.productAmount}>{item.amount} x </span>{item.product_price} VNĐ</p>
                                            </div>
                                            <div onClick={() => {
                                                removeFromCarts(item.id)
                                            }
                                            } className={styles.cusTimesIcon}>
                                                x
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className={styles.sumPrice}>TỔNG SỐ PHỤ: <span className={styles.moneyNum}>{`${sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} VNĐ`}</span></p>
                        <div className={styles.cartNav}>
                            <a href='' className={styles.cartNavElement}>XEM GIỎ HÀNG</a>
                            <a href='' className={styles.cartNavElement}>THANH TOÁN</a>
                        </div>
                    </div>
                }
                {
                    carts.isEmptyCart && <p className={styles.emptyCartNoti}>CHƯA CÓ SẢN PHẨM TRONG GIỎ HÀNG.</p>
                }
            </div>
        </div>
    )
}


export default Cart