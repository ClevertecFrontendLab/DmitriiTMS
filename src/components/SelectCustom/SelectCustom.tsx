import { Select } from '@chakra-ui/react';

import styles from './SelectCustom.module.css';

function SelectCustom() {
    return (
        <Select className={styles.customSelect} placeholder='Выберите из списка...'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    );
}

export default SelectCustom;
