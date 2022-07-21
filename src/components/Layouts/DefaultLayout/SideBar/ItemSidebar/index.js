import classNames from 'classnames/bind';
import styles from './ItemSidebar.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ItemSidebar = ({ item, choose, onClick }) => {
    return (
        <li>
            <Link to={item.to} className={cx({ active: item.id === choose })} onClick={onClick}>
                {item.icon}
                <span>{item.item}</span>
            </Link>
        </li>
    );
};

export default ItemSidebar;
