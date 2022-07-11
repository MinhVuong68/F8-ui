import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img
                            src="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            alt="F8"
                        />
                    </Link>
                    <h4 className={cx('title-logo')}>Học Lập Trình Để Đi Làm</h4>
                </div>
                <div className={cx('abc')}>
                    <div className={cx('search')}>
                        <div className={cx('icon-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <input
                            placeholder="Tìm kiếm khóa học, bài viết, video..."
                            spellCheck={false}
                            className={cx('search-input')}
                        />
                        <button className={cx('close-search')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </div>
                <div className={cx('action')}>
                    <button className={cx('button')}>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
