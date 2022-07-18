import styles from './Menu.module.scss';
import className from 'classnames/bind';
import Button from '~/components/Button';

const cx = className.bind(styles);
const MenuItem = ({ data }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <>
            <Button className={classes} to={data.to}>
                {data.title}
            </Button>
            {data.separate}
        </>
    );
};

export default MenuItem;
