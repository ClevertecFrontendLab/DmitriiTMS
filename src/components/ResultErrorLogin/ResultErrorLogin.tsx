import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import errorLogin from '../../assets/result/error-login.svg';

import styles from './ResultErrorLogin.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { deleteErrorUser } from '@redux/slices/userSlice';


export const ResultErrorLogin: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handlerClickAuth = () => {
        dispatch(deleteErrorUser())
    }

    return (
        <div className={styles.loginErrorBlock}>
            <Image src={errorLogin} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Вход не выполнен</Title>
            <Text type="secondary" style={{display: 'block', marginBottom: '16px'}}>Что-то пошло не так. Попробуйте ещё раз</Text>
            <Link to='/auth' className={styles.linkError} onClick={handlerClickAuth}>Повторить</Link>
        </div>
    )
}
