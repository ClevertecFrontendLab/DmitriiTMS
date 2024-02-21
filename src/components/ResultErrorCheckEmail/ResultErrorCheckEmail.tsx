import { Typography, Image } from 'antd';

const { Title, Text } = Typography;

import manError from '../../assets/result/man-error.svg'
import { Link } from 'react-router-dom';
import styles from './ResultErrorCheckEmail.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { checkEmail } from '@redux/actions/checkEmail';

export const ResultErrorCheckEmail: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const location = useSelector((state: RootState) => state.router);

    const handleClick = () => {
        const email = localStorage.getItem('email');
        if(location.location?.pathname === '/result/error-check-email' && email) {
            dispatch(checkEmail({email}));
        } 
    }

    return (
        <div className={styles.bgCart}>
            <Image src={manError} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Что-то пошло не так</Title>
            <Text type="secondary" style={{display: 'block', margin: '0 auto 16px auto'}}>Произошла ошибка, попробуйте отправить форму ещё раз.</Text>
            <Link className={styles.linkErrorNoexistbg} onClick={handleClick} to='/auth'>Назад</Link>
        </div>
    )
}
