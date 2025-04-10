import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import styles from './SearchGroupe.module.css';

function SearchGroupe() {
    return (
        <InputGroup className={styles['search-input-group']}>
            <InputRightElement className={styles['search-input-right-element']}>
                <SearchIcon />
            </InputRightElement>
            <Input
                className={styles['search-input']}
                type='text'
                placeholder='Название или ингредиент...'
            />
        </InputGroup>
    );
}

export default SearchGroupe;
