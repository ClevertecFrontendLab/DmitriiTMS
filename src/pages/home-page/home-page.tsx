import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router';

import ButtonSort from '~/components/ButtonSort/ButtonSort';
import CardsItems from '~/components/CardsItems/CardsItems';
import CardsSlider from '~/components/CardsSlider/CardsSlider';
import SearchGroupe from '~/components/SearchGroupe/SearchGroupe';
import SelectCustom from '~/components/SelectCustom/SelectCustom';
import SwitchCustom from '~/components/SwitchCustom/SwithCustom';
import Title from '~/components/Title/Title';
import TitleSection from '~/components/TitleSection/TitleSection';

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

            <Box className={styles.sectionSlider}>
                <TitleSection text='Новые рецепты' />

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

            <Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <TitleSection text='Самое сочное' />
                    <Button bg='#b1ff2e' w='197px' h='48px' p={0}>
                        <Link
                            to='#'
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '600',
                                fontSize: '18px',
                                color: '#000',
                            }}
                        >
                            <span>Вся подборка</span>
                            <ArrowForwardIcon ml='8px' w={8} />
                        </Link>
                    </Button>
                </Box>
                <Box>
                    <CardsItems />
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
