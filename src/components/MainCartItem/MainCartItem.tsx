import { Typography } from 'antd';
const { Paragraph } = Typography;

import styles from './MainCartItem.module.css';

interface CartItemProps {
    title: string,
    icon: string,
    span: string,
}

export const MainCartItem: React.FC<CartItemProps> = ({title, icon, span}) => {
    return (
        <div className={styles.list__item}>
            <Paragraph className={styles.list__item_title}>{title}</Paragraph>
            <Paragraph className={styles.content}>
                <img className={styles.content__img} src={icon} alt={icon} />
                <span className={styles.content__span}>{span}</span>
            </Paragraph>
        </div>
    )
}