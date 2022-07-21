import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import CourseItem from '~/components/CourseItem';
import Wrapper from '~/components/Popper/Wrapper';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showValueSearch, setShowValueSearch] = useState(true);
    const [loading, setLoading] = useState(false);
    const [titleSearch, setTitleSearch] = useState(''); // Kết quả tìm kiếm cho 'js'
    const [titleResultSearch, setTitleResultSearch] = useState(''); // Tìm 'js'

    const inputSearch = useRef();
    useEffect(() => {
        if (!searchValue.trim() || searchValue.length < 2) {
            setTitleResultSearch(`Kết quả cho '${searchValue}'`);
            setSearchResult([]);
            return;
        }
        setLoading(true);
        setTitleSearch(`Tim '${searchValue}'`);
        fetch(`https://api-gateway.fullstack.edu.vn/api/search?q=${encodeURIComponent(searchValue)}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data.courses.length === 0);
                if (res.data.courses.length === 0) {
                    setTitleResultSearch(`Không có kết quả cho '${searchValue}'`);
                } else {
                    setTitleResultSearch(`Kết quả '${searchValue}'`);
                }
                setSearchResult(res.data.courses);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);
    const handleCloseSearch = () => {
        setSearchValue('');
        setSearchResult([]);
        inputSearch.current.focus();
    };

    const handleShowValueSearch = () => {
        setShowValueSearch(false);
    };

    console.log(searchValue);

    return (
        <div className={cx('wrapper-search')}>
            <Tippy
                visible={showValueSearch && searchValue.length > 0}
                interactive={true}
                render={(attrs) => (
                    <Wrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <div className={cx('search-header')}>
                                {!loading && (
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search-header')} />
                                )}

                                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                                <span>{loading ? titleSearch : titleResultSearch}</span>
                            </div>
                            {!!searchValue && searchResult.length > 0 && (
                                <div className={cx('type-result-search')}>
                                    <h4>KHÓA HỌC</h4>
                                    <a href="/" className={cx('see-more')}>
                                        Xem thêm
                                    </a>
                                </div>
                            )}
                            {!!searchResult &&
                                searchResult.map((course) => <CourseItem key={course.id} data={course} />)}
                        </div>
                    </Wrapper>
                )}
                onClickOutside={handleShowValueSearch}
            >
                <div className={cx('search')}>
                    <div className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        value={searchValue}
                        ref={inputSearch}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm khóa học, bài viết, video..."
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowValueSearch(true)}
                    />
                    {!!searchValue && (
                        <button className={cx('close-search')} onClick={handleCloseSearch}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>
            </Tippy>
        </div>
    );
};

export default Search;
