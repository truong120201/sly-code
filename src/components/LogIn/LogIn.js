import styles from './LogIn.module.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogIn(props) {

    function handleShowLogIn(newValue) {
        props.handleShowLogIn(newValue)
    }

    return (
        <div className={styles.logInModal}>
            <FontAwesomeIcon
                className={styles.logInCloseBtn}
                onClick={() => handleShowLogIn(false)}
                icon={faTimes}
            />
            <div className={styles.logInContent}>
                <div className={`${styles.logInElement} ${styles.logInLog}`}>
                    <p className={styles.logInHeading}>ĐĂNG NHẬP</p>
                    <form className={styles.logInDetail}>
                        <p className={styles.logInDetailHeading}>TÊN TÀI KHOẢN HOẶC ĐỊA CHỈ EMAIL *</p>
                        <input
                            className={styles.logInInput}
                        />
                        <p className={styles.logInDetailHeading}>MẬT KHẨU *</p>
                        <input
                            className={styles.logInInput}
                        />
                        <div className={`${styles.flexCenter} ${styles.logInDetailRemem}`}>
                            <input
                                type="checkbox"
                            />
                            <p className={styles.logInDetailRememDes}>GHI NHỚ MẬT KHẨU</p>
                        </div>
                        <input
                            type="submit"
                            value="ĐĂNG NHẬP"
                            className={styles.loginSubmitBtn}
                        />
                    </form>
                    <a href='#' className={styles.forgetPassword}>QUÊN MẬT KHẨU?</a>
                </div>
                <div className={`${styles.logInElement} ${styles.logInRegister}`}>
                    <p className={styles.logInHeading}>ĐĂNG KÝ</p>
                    <form className={styles.logInDetail}>
                        <p className={styles.logInDetailHeading}>ĐỊA CHỈ EMAIL *</p>
                        <input
                            className={styles.logInInput}
                        />
                        <p className={styles.registerDes} >A PASSWORD WILL BE SENT TO YOUR EMAIL ADDRESS.</p>
                        <p className={styles.registerDes}>DỮ LIỆU CÁ NHÂN CỦA BẠN SẼ ĐƯỢC SỬ DỤNG ĐỂ HỖ TRỢ TRẢI NGHIỆM CỦA BẠN TRÊN TOÀN BỘ TRANG WEB NÀY, ĐỂ QUẢN LÝ QUYỀN TRUY CẬP VÀO TÀI KHOẢN CỦA BẠN VÀ CHO CÁC MỤC ĐÍCH KHÁC ĐƯỢC MÔ TẢ TRONG CHÚNG TÔI <a href='#' className={`${styles.forgetPassword} ${styles.fontSize16}`}>CHÍNH SÁCH RIÊNG TƯ</a>.</p>
                        <input
                            type="submit"
                            value="ĐĂNG KÝ"
                            className={styles.loginSubmitBtn}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn