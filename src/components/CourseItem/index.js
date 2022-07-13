import styles from './CourseItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const CourseItem = () => {
    return (
        <div className={cx('course-item')}>
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="reactjs" />
            <span>Xây Dựng Website với ReactJS</span>
        </div>
    );
};
export default CourseItem;
