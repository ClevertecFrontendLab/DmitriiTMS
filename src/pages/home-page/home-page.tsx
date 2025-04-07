import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';

import { BtnFilterIcon } from '~/components/Icons/BtnFilterIcon';

function HomePage() {
    return (
        <Box maxWidth='1360px' marginLeft='24px'>
            <Heading textAlign='center' as='h1' m='24px 0' fontSize='48px' fontWeight='700'>
                Приятного аппетита!
            </Heading>

            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                gap='12px'
                marginBottom='16px'
            >
                <Button
                    w='48px'
                    h='48px'
                    p={0}
                    bg='transparent'
                    variant='outline'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius='6px'
                >
                    <BtnFilterIcon />
                </Button>
                <InputGroup maxWidth='458px'>
                    <InputRightElement pointerEvents='none' paddingTop='10px'>
                        <SearchIcon />
                    </InputRightElement>
                    <Input
                        height='48px'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        type='text'
                        placeholder='Название ингридиента'
                        _placeholder={{ color: '#134b00', fontSize: '18px', fontWeight: '400' }}
                    />
                </InputGroup>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' gap='22px'>
                <Box>
                    <FormControl display='flex' gap='12px' alignItems='center'>
                        <FormLabel
                            fontFamily='Inter'
                            fontWeight='500'
                            fontSize='16px'
                            color='#000'
                            marginRight='0'
                            marginBottom='2px'
                            cursor='pointer'
                            htmlFor='allergens'
                        >
                            Исключить мои аллергены
                        </FormLabel>
                        <Switch id='allergens' />
                    </FormControl>
                </Box>
                <Box>
                    <Select
                        placeholder='Выберите из списка...'
                        size='lg'
                        width='234px'
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
