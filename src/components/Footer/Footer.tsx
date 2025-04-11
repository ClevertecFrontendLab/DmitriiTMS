import { Box, Button, Text } from '@chakra-ui/react';

import { CustomExitIcon } from '../Icons/BtnFilterIcon';

function Footer() {
    return (
        <Box as='footer' w='256px' position='fixed' bottom='0' zIndex='1000' bg='#fff' p='24px'>
            <Text
                fontFamily='Inter'
                fontSize='12px'
                fontWeight='500'
                color='rgba(0, 0, 0, 0.24)'
                mb='16px'
            >
                Версия программы 03.25
            </Text>
            <Text
                fontFamily='Inter'
                fontSize='12px'
                fontWeight='400'
                lineHeight='133%'
                color='rgba(0, 0, 0, 0.64)'
                mb='16px'
            >
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
            <Button
                leftIcon={<CustomExitIcon />}
                variant='ghost'
                fontFamily='Inter'
                fontSize='12px'
                fontWeight='600'
                lineHeight='133%'
                color='#000'
                p={0}
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
            >
                Выйти
            </Button>
        </Box>
    );
}

export default Footer;
