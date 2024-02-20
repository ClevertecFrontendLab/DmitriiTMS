
import styles from './Layout.module.css';



export const LayoutForgot = ({children}: {children: React.ReactNode}) => {


    return (

       <div className={styles.wrapperLayoutForget}>
            {children}
       </div>
    )
}