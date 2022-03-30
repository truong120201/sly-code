import styles from './SideBars.module.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

import mobiAllProducts from '../../assets/image/mobi-allsp.svg'
import mobiHoodie from '../../assets/image/mobi-hoodie.svg'
import mobiSweater from '../../assets/image/mobi-sweater.svg'
import mobiTShirt from '../../assets/image/mobi-tshirt.svg'
import mobiJacket from '../../assets/image/mobi-jacket.svg'
import mobiBottoms from '../../assets/image/mobi-bottoms.svg'
import mobiPK from '../../assets/image/mobi-pk.svg'
import mobiUser from '../../assets/image/mobi-user.svg'

function SideBars(props) {

    function handleShowMobileSideBars(newValue) {
        props.handleShowMobileSideBars(newValue)
    }

    function handleShowLogIn(newValue) {
        props.handleShowLogIn(newValue)
    }

    return (
        <div className={styles.sideBars}>
            <FontAwesomeIcon
                className={styles.logInCloseBtn}
                onClick={() => handleShowMobileSideBars(false)}
                icon={faTimes}
            />
            <div className={styles.sideBarsMain}>
                <div className={styles.sideBarsElement}>
                    <input className={styles.inputSearch} type="text" placeholder='Tìm kiếm...' />
                    <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
                </div>
                <div onClick={() => {
                    handleShowLogIn(true)
                    handleShowMobileSideBars(false)
                }} className={styles.sideBarsElement}>
                    <img src={mobiUser} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>TÀI KHOẢN</p>
                </div>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/all-products" className={styles.sideBarsElement}>
                    <img src={mobiAllProducts} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>SẢN PHẨM</p>
                </Link>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/hoodie" className={styles.sideBarsElement}>
                    <img src={mobiHoodie} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>HOODIE</p>
                </Link>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/sweater" className={styles.sideBarsElement}>
                    <img src={mobiSweater} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>SWEATER</p>
                </Link>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/t-shirt" className={styles.sideBarsElement}>
                    <img src={mobiTShirt} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>T-SHIRT</p>
                </Link>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/jacket" className={styles.sideBarsElement}>
                    <img src={mobiJacket} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>JACKET</p>
                </Link>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/bottoms" className={styles.sideBarsElement}>
                    <img src={mobiBottoms} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>BOTTOMS</p>
                </Link>
                <Link onClick={() => handleShowMobileSideBars(false)} to="/accessories" className={styles.sideBarsElement}>
                    <img src={mobiPK} className={styles.sideBarsNavIcon} />
                    <p className={styles.sideBarsNavDes}>PHỤ KIỆN</p>
                </Link>
            </div>
        </div>
    )
}

export default SideBars