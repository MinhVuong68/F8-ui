import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Wrapper from '../Wrapper';

const cx = classNames.bind(styles);

const Menu = ({ items, children }) => {
    console.log(items);
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };
    return (
        <Tippy
            trigger="click"
            delay={[0, 700]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <Wrapper>
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <div className={cx('username-wrapper')}>
                            <img
                                src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                className={cx('user-avatar')}
                                alt="vuong"
                            />
                            <div className={cx('user-info')}>
                                <h3 className={cx('name')}>Vương Nguyễn</h3>
                                <p className={cx('username')}>@vuong608</p>
                            </div>
                        </div>
                        <hr />
                        {renderItem()}
                    </div>
                </Wrapper>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
