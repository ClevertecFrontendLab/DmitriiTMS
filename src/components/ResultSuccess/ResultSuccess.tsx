import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import success from '../../assets/result/success.svg';

import styles from './ResultSuccess.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { deleteErrorUser } from '@redux/slices/userSlice';


export const ResultSuccess: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handlerClickAuth = () => {
        dispatch(deleteErrorUser())
    }

    return (
        <div className={styles.loginErrorBlock}>
            <Image src={success} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Регистрация успешна</Title>
            <Text type="secondary" style={{display: 'block', marginBottom: '16px', maxWidth: '368px'}}>Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.</Text>
            <Link to='/auth' className={styles.linkError} onClick={handlerClickAuth}>Войти</Link>
        </div>
    )
}
