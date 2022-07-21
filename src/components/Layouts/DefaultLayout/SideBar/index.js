import classNames from 'classnames/bind';
import { useState } from 'react';
import { CreateIcon } from '~/icons';
import ItemSidebar from './ItemSidebar';
import listItemSidebar from './itemsSidebar';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const SideBar = () => {
    const [choose, setChoose] = useState('');

    const handleChoose = (id) => {
        setChoose(id);
    };

    console.log(choose);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('create-button')}>
                    <CreateIcon className={cx('create-icon')} />
                </div>

                <ul className={cx('list')}>
                    {listItemSidebar.map((item, index) => (
                        <ItemSidebar key={index} item={item} choose={choose} onClick={() => handleChoose(item.id)} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
