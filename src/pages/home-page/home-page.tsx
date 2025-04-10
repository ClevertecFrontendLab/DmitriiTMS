import { Box, Button, Heading, Image } from '@chakra-ui/react';

import ButtonSort from '~/components/ButtonSort/ButtonSort';
import CardsSlider from '~/components/CardsSlider/CardsSlider';
import SearchGroupe from '~/components/SearchGroupe/SearchGroupe';
import SelectCustom from '~/components/SelectCustom/SelectCustom';
import SwitchCustom from '~/components/SwitchCustom/SwithCustom';
import Title from '~/components/Title/Title';

import arrowLeft from '../../assets/main/slider/arrowLeft.svg';
import arrowRight from '../../assets/main/slider/arrowRight.svg';
import styles from './home-page.module.css';

function HomePage() {
    return (
        <Box className={styles.container}>
            <Title title='Приятного аппетита!' />

            <Box className={styles.containerSearch}>
                <ButtonSort />
                <SearchGroupe />
            </Box>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                gap='18px'
                marginBottom='56px'
            >
                <Box>
                    <SwitchCustom />
                </Box>
                <Box>
                    <SelectCustom />
                </Box>
            </Box>

            <Box>
                <Heading as='h2' fontFamily='Inter' fontSize='48px' fontWeight='500' mb='18px'>
                    Новые рецепты
                </Heading>
                <Box position='relative'>
                    <Button
                        variant='solid'
                        bg='#000'
                        w='48px'
                        h='48px'
                        position='absolute'
                        left='-6px'
                        zIndex={2}
                        top='40%'
                        transform='translateY(-40%)'
                    >
                        <Image src={arrowLeft} alt='arrowLeft' />
                    </Button>

                    <CardsSlider />

                    <Button
                        variant='solid'
                        bg='#000'
                        w='48px'
                        h='48px'
                        position='absolute'
                        right='-6px'
                        zIndex={2}
                        top='40%'
                        transform='translateY(-40%)'
                    >
                        <Image src={arrowRight} alt='arrowRight' />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
