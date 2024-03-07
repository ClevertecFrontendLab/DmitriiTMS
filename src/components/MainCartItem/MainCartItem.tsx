import { Typography } from 'antd';
const { Paragraph } = Typography;

import styles from './MainCartItem.module.css';
import { Link } from 'react-router-dom';

interface CartItemProps {
    title: string,
    icon: string,
    span: string,
    path: string
}

export const MainCartItem: React.FC<CartItemProps> = ({title, icon, span, path}) => {
    return (
        <Link to={path} className={styles.list__item}>
            <Paragraph className={styles.list__item_title}>{title}</Paragraph>
            <Paragraph className={styles.content}>
                <img className={styles.content__img} src={icon} alt={icon} />
                <span className={styles.content__span}>{span}</span>
            </Paragraph>
        </Link>
    )
}