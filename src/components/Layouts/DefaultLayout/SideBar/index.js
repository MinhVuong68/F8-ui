import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { CreateIcon, PenIcon } from '~/icons';
import ItemSidebar from './ItemSidebar';
import listItemSidebar from './itemsSidebar';
import styles from './Sidebar.module.scss';
import Wrapper from '~/components/Popper/Wrapper';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const SideBar = () => {
    const [choose, setChoose] = useState('');
    const [open, setOpen] = useState(false);

    const handleChoose = (id) => {
        setChoose(id);
    };

    console.log(open);

    const handleOpenCreate = () => {
        setOpen(!open);
    };

    const handleOutSide = () => {
        setOpen(false);
    };

    console.log(choose);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Tippy
                    placement="bottom-end"
                    interactive={true}
                    trigger="click"
                    onClickOutside={handleOutSide}
                    render={(attrs) => (
                        <Wrapper>
                            <div className={cx('box-create')} tabIndex="-1" {...attrs}>
                                <Link to="./" className={cx('write-blog')}>
                                    <PenIcon />
                                    <span>Viết blog</span>
                                </Link>
                            </div>
                        </Wrapper>
                    )}
                >
                    <div className={cx('create-button')} onClick={handleOpenCreate}>
                        <CreateIcon
                            className={cx('create-icon', {
                                open: open,
                            })}
                        />
                    </div>
                </Tippy>

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
