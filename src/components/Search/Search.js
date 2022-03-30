import styles from './Search.module.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Search(props) {

    function handleShowSearch(newValue) {
        props.handleShowSearch(newValue)
    }

    return (
        <div className={styles.searchModal}>
            <FontAwesomeIcon
                className={styles.logInCloseBtn}
                onClick={() => handleShowSearch(false)}
                icon={faTimes}
            />
            <div className={styles.searchContent}>
                <input
                    className={styles.searchInput}
                    placeholder='Tìm kiếm...'
                />
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            </div>

        </div>
    )
}

export default Search