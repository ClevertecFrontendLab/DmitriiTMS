import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import error from '../../assets/result/crow-error.svg';

import styles from './ResultEmailNoExist.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { clearRecoveryErrors } from '@redux/slices/recoverySlice';


export const ResultEmailNoExist: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handlerClickAuth = () => {
        dispatch(clearRecoveryErrors())
    }

    return (
        <div className={styles.noexist}>
            <Image src={error} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Такой e-mail не зарегистрирован</Title>
            <Text type="secondary" style={{display: 'block', margin: '0 auto 16px auto', maxWidth: '368px'}}>Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail</Text>
            <Link to='/auth' className={styles.linkErrorNoexist} onClick={handlerClickAuth}>Попробовать снова</Link>
        </div>
    )
}
