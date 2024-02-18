import animationData from './loader.json';
import Lottie from "lottie-react";

import styles from './Loader.module.css';


export const Loader = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.lottie}>
                <Lottie animationData={animationData} loop={true} />
            </div>
        </div>
    )
}
