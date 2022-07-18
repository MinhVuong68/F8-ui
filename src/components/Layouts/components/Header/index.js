import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Fragment, useState } from 'react';

import styles from './Header.module.scss';
import CourseItem from '~/components/CourseItem';
import MyCourseItem from '~/components/MyCourseItem';
import Wrapper from '~/components/Popper/Wrapper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Trang cá nhân',
        to: '/profile',
        separate: <hr />,
    },
    {
        title: 'Viết blog',
        to: '/new-port',
    },
    {
        title: 'Bài viết của tôi',
        to: '/profile',
        separate: <hr />,
    },
    {
        title: 'Bài viết đã lưu',
        to: '/profile',
        separate: <hr />,
    },
    {
        title: 'Cài đặt',
        to: '/setting',
    },
    {
        title: 'Đăng xuất',
        to: '/login',
    },
];

const Header = () => {
    const [close, setClose] = useState(true);
    const handleCloseSearch = () => {
        setClose(false);
    };

    const userLogin = true;
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
                        visible={close}
                        interactive={true}
                        render={(attrs) => (
                            <Wrapper>
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <div className={cx('search-header')}>
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            className={cx('icon-search-header')}
                                        />
                                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                                        <span>Kết quả tìm kiếm cho 'javascript'</span>
                                    </div>
                                    <div className={cx('type-result-search')}>
                                        <h4>KHÓA HỌC</h4>
                                        <a href="/" className={cx('see-more')}>
                                            Xem thêm
                                        </a>
                                    </div>
                                    <CourseItem />
                                    <CourseItem />
                                    <CourseItem />
                                    <CourseItem />
                                    <CourseItem />
                                    <CourseItem />
                                </div>
                            </Wrapper>
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
                            <button className={cx('close-search')} onClick={handleCloseSearch}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('action')}>
                    {userLogin ? (
                        <Fragment>
                            <Tippy
                                placement="top-start"
                                trigger="click"
                                interactive={true}
                                render={(attrs) => (
                                    <div className={cx('container-my-course')} tabIndex="-1" {...attrs}>
                                        <Wrapper>
                                            <div className={cx('header-my-source')}>
                                                <h4>Khóa học của tôi</h4>

                                                <Button className={cx('see-all-my-course')} to="/my-course">
                                                    Xem tất cả
                                                </Button>
                                            </div>
                                            <div className={cx('my-course-content')}>
                                                <MyCourseItem />
                                                <MyCourseItem />
                                                <MyCourseItem />
                                                <MyCourseItem />
                                                <MyCourseItem />
                                                <MyCourseItem />
                                                <MyCourseItem />
                                                <MyCourseItem />
                                            </div>
                                        </Wrapper>
                                    </div>
                                )}
                            >
                                <button className={cx('my-course')}>Khóa học của tôi</button>
                            </Tippy>
                            <div className={cx('icon-notify')}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>

                            <Menu items={MENU_ITEMS}>
                                <img
                                    className={cx('avatar')}
                                    src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                    alt="vuong-nguyen"
                                />
                            </Menu>
                        </Fragment>
                    ) : (
                        <Button primary rounded to="/login">
                            Đăng nhập
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
