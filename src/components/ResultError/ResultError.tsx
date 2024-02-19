import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import error from '../../assets/result/crow-error.svg';

import styles from './ResultError.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { deleteErrorUser } from '@redux/slices/userSlice';


export const ResultError: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handlerClickAuth = () => {
        dispatch(deleteErrorUser())
    }

    return (
        <div className={styles.loginErrorBlock}>
            <Image src={error} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Данные не сохранились</Title>
            <Text type="secondary" style={{display: 'block', marginBottom: '16px', maxWidth: '368px'}}>Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.</Text>
            <Link to='/auth/registration' className={styles.linkError} onClick={handlerClickAuth}>Повторить</Link>
        </div>
    )
}
