import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

import styles from './SwitchCustom.module.css';

function SwitchCustom() {
    return (
        <FormControl className={styles.controlContainer}>
            <FormLabel className={styles.formLabel} htmlFor='allergens'>
                Исключить мои аллергены
            </FormLabel>
            <Switch id='allergens' />
        </FormControl>
    );
}

export default SwitchCustom;
