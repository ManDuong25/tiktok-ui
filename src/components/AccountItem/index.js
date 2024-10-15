import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/54c8befbb0bc42517be06d51c7471c79~c5_300x300.webp?lk3s=a5d48078&amp;nonce=40515&amp;refresh_token=d6b0b0fb6024f55bf68b8f3d5561949d&amp;x-expires=1729170000&amp;x-signature=H6hutchaYp74l7hXb1ihmXVOOgw%3D&amp;shp=a5d48078&amp;shcp=c1333099%22%20class=%22css-1zpj2q-ImgAvatar%20e1e9er4e1"
                alt="Hoaa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('info-name')}>
                    <span>Duong Cong Man</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('info-username')}>manduong25</span>
            </div>
        </div>
    );
}

export default AccountItem;
