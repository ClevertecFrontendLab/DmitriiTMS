import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router';

import ButtonSort from '~/components/ButtonSort/ButtonSort';
import CardsBlogs from '~/components/CardsBlogs/CardsBlogs';
import CardsCooking from '~/components/CardsCooking/CardsCooking';
import CardsFooter from '~/components/CardsFooter/CardsFooter';
import CardsItems from '~/components/CardsItems/CardsItems';
import CardsSlider from '~/components/CardsSlider/CardsSlider';
import SearchGroupe from '~/components/SearchGroupe/SearchGroupe';
import SelectCustom from '~/components/SelectCustom/SelectCustom';
import SwitchCustom from '~/components/SwitchCustom/SwithCustom';
import TextRecipe from '~/components/TextRecipe/TextRecipe';
import Title from '~/components/Title/Title';
import TitleSection from '~/components/TitleSection/TitleSection';

import arrowLeft from '../../assets/main/slider/arrowLeft.svg';
import arrowRight from '../../assets/main/slider/arrowRight.svg';
import styles from './home-page.module.css';

function HomePage() {
    return (
        <Box className='container'>
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
                <TitleSection fs='48px' fw='500' text='Новые рецепты' />

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

            <Box mb='40px'>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <TitleSection fs='48px' fw='500' text='Самое сочное' />
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

            <Box bg='#c4ff61' borderRadius='16px' padding='24px' mb='40px'>
                <Box display='flex' alignItems='center' justifyContent='space-between' mb='10px'>
                    <TitleSection fs='36' fw='400' text='Кулинарные блоги' />
                    <Button bg='transparent' w='197px' h='48px' p={0}>
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
                            <span>Все авторы</span>
                            <ArrowForwardIcon ml='8px' w={8} />
                        </Link>
                    </Button>
                </Box>

                <CardsBlogs />
            </Box>

            <Box borderTop='1px solid rgba(0, 0, 0, 0.08)' pt='20px'>
                <Box display='flex'>
                    <TitleSection flex='1 1 50%' fs='48px' fw='500' text='Веганская кухня' />
                    <TextRecipe text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.' />
                </Box>
                <Box display='flex' alignItems='center' gap='24px'>
                    <CardsFooter />
                    <CardsCooking />
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
