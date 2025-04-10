import { Button } from '@chakra-ui/react';

import { BtnFilterIcon } from '../Icons/BtnFilterIcon';
import styles from './ButtonSort.module.css';

function ButtonSort() {
    return (
        <Button className={styles['custom-button']} variant='outline'>
            <BtnFilterIcon />
        </Button>
    );
}

export default ButtonSort;
