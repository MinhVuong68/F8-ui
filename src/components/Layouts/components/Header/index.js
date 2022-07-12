import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';

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
                <div className={cx('wrapper-search')}>
                    <Tippy
                        visible={true}
                        interactive={true}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <div className={cx('search-header')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search-header')} />
                                    <span>Kết quả tìm kiếm cho 'javascript'</span>
                                </div>
                                <div className={cx('type-result-search')}>
                                    <h4>KHÓA HỌC</h4>
                                    <a href="/" className={cx('see-more')}>
                                        Xem thêm
                                    </a>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
                                    <span>Xây Dựng Website với ReactJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="reactjs" />
                                    <span>Node & ExpressJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
                                    <span>Xây Dựng Website với ReactJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="reactjs" />
                                    <span>Node & ExpressJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
                                    <span>Xây Dựng Website với ReactJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="reactjs" />
                                    <span>Node & ExpressJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
                                    <span>Xây Dựng Website với ReactJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="reactjs" />
                                    <span>Node & ExpressJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
                                    <span>Xây Dựng Website với ReactJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="reactjs" />
                                    <span>Node & ExpressJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
                                    <span>Xây Dựng Website với ReactJS</span>
                                </div>
                                <div className={cx('course-item')}>
                                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/6.png" alt="reactjs" />
                                    <span>Node & ExpressJS</span>
                                </div>
                            </div>
                        )}
                    >
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
                    </Tippy>
                </div>
                <div className={cx('action')}>
                    <button className={cx('button')}>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
