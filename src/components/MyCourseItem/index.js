import classNames from 'classnames/bind';
import styles from './MyCourseItem.module.scss';

const cx = classNames.bind(styles);

const MyCourseItem = () => {
    return (
        <div className={cx('my-course-item')}>
            <a href="/">
                <img
                    className={cx('my-course-image')}
                    src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    alt="reactjs"
                />
            </a>
            <div className={cx('my-course-info')}>
                <h3>Xây Dựng Website với ReactJs</h3>
                <p className="my-course-last-complete">Học cách đây 7 giờ</p>
            </div>
        </div>
    );
};

export default MyCourseItem;
