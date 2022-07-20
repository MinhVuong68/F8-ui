import styles from './CourseItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const CourseItem = ({ data }) => {
    return (
        <div className={cx('course-item')}>
            <img src={data.image_url} alt="reactjs" />
            <span>{data.title}</span>
        </div>
    );
};
export default CourseItem;
