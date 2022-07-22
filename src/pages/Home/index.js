import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('slideshow')}>
            <div className={cx('left')}>
                <a href="/">F8 trên Facebook</a>
                <p>
                    F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập
                    trình F8 sẽ ở đó.
                </p>
            </div>
            <div className={cx('right')}>
                <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png" alt="img"></img>
            </div>
        </div>
    );
};

export default Home;
