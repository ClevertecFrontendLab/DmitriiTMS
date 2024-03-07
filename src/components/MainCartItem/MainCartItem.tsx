import { Typography } from 'antd';
const { Paragraph } = Typography;

import styles from './MainCartItem.module.css';

interface CartItemProps {
    title: string,
    icon: string,
    span: string,
    onclick: () => void,
    dataTestId: string
}

export const MainCartItem: React.FC<CartItemProps> = ({title, icon, span, onclick, dataTestId}) => {
    return (
        <div className={styles.list__item} onClick={onclick}>
            <Paragraph className={styles.list__item_title}>{title}</Paragraph>
            <Paragraph className={styles.content}>
                <img className={styles.content__img} src={icon} alt={icon} />
                <span  data-test-id={dataTestId} className={styles.content__span}>{span}</span>
            </Paragraph>
        </div>
    )
}
