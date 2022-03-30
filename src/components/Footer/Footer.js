import styles from './Footer.module.css'
import logoShop from '../../assets/image/logo_sly-seo.png'
import ghtk from '../../assets/image/ghtk.png'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={`${styles.footerElementTop} ${styles.footerElement}`}>
                <div className={styles.footerTopElement}>
                    <img src={logoShop} className={styles.logoBottom} />
                    <p className={styles.footerTopContact}>Store Online: 0902 798 994</p>
                    <p className={styles.footerTopContact}>HCM: The New PlayGround - 90 Lê Lai, Q1</p>
                    <p className={styles.footerTopContact}>Open: 10h - 21h30</p>
                </div>
                <div className={styles.footerTopElement}>
                    <p className={styles.footerTopHeading}>CHÍNH SÁCH</p>
                    <a href='' className={styles.footerTopLink}>CHÍNH SÁCH ĐỔI HÀNG</a>
                    <a href='' className={styles.footerTopLink}>CHÍNH SÁCH BẢO MẬT</a>
                    <a href='' className={styles.footerTopLink}>HỆ THỐNG MEMBER</a>
                    <a href='' className={styles.footerTopLink}>HỆ THỐNG CỬA HÀNG</a>
                </div>
                <div className={styles.footerTopElement}>
                    <p className={styles.footerTopHeading}>DỊCH VỤ - HƯỚNG DẪN</p>
                    <a href='' className={styles.footerTopLink}>GIAO HÀNG TẬN NƠI</a>
                    <a href='' className={styles.footerTopLink}>MEMBER OFFLINE</a>
                    <a href='' className={styles.footerTopLink}>MEMBER ONLINE</a>
                    <a href='' className={styles.footerTopLink}>HƯỚNG DẪN ĐĂNG KÝ TÀI KHOẢN</a>
                    <a href='' className={styles.footerTopLink}>HƯỚNG DẪN BẢO QUẢN</a>
                    <a href='' className={styles.footerTopLink}>TUYỂN DỤNG</a>
                </div>
                <div className={styles.footerTopElement}>
                    <p className={styles.footerTopHeading}>CỘNG ĐỒNG</p>
                    <div className={styles.socialMediaWrapper}>
                        <a href='' className={styles.socialMediaLink}><FontAwesomeIcon className={styles.socialMediaIcon} icon={faFacebookF} /></a>
                        <a href='' className={styles.socialMediaLink}><FontAwesomeIcon className={styles.socialMediaIcon} icon={faInstagram} /></a>
                        <a href='' className={styles.socialMediaLink}><FontAwesomeIcon className={styles.socialMediaIcon} icon={faTiktok} /></a>
                    </div>
                    <p className={styles.footerTopHeading}>ĐỐI TÁC GIAO HÀNG</p>
                    <img className={styles.shipping} src={ghtk} />
                </div>
            </div>
            <div className={`${styles.footerElementBottom} ${styles.footerElement}`}>

            </div>
        </div>
    )
}

export default Footer