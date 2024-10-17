import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faHouse,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult((prev) => {
                return [];
            });
        }, 3000);
    }, []);
    console.log(images);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />{' '}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and video..." spellCheck="false" />
                        <button style={{ display: 'none' }} className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Đăng nhập</Button>
                    <Tippy
                        interactive
                        visible={false}
                        render={(attrs) => (
                            <div className={cx('menu-tool')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <div className={cx('menu-item')}>
                                        <FontAwesomeIcon styles={{ fontSize: '18px' }} icon={faHouse} />
                                        <span>Công cụ dành cho nhà sáng tạo</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <FontAwesomeIcon styles={{ fontSize: '18px' }} icon={faHouse} />
                                        <span>Tiếng việt</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <FontAwesomeIcon styles={{ fontSize: '18px' }} icon={faHouse} />
                                        <span>Phản hồi và trợ giúp</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <FontAwesomeIcon styles={{ fontSize: '18px' }} icon={faHouse} />
                                        <span>Chế độ tối</span>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div>
                            <FontAwesomeIcon
                                style={{ marginLeft: '28px', fontSize: '20px' }}
                                icon={faEllipsisVertical}
                            />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
