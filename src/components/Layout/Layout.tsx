import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainIcons from '../MainIcons/MainIcons';
import Navigation from '../Navigation/Navigation';
import WriteRecipe from '../WriteRecipe/WripeRecipe';

function Layout() {
    return (
        <Grid
            maxW='1920px'
            mx='auto'
            templateAreas={{
                base: `"header" "nav" "main" "footer"`,
                md: `"header header" "nav main" "footer footer"`,
            }}
            gridTemplateRows={{
                base: 'auto auto 1fr auto',
                md: 'auto 1fr auto',
            }}
            gridTemplateColumns={{
                base: '1fr',
                md: '256px 1fr',
            }}
            minH='100vh'
            h='100vh' // Фиксируем высоту
            overflow='hidden' // Отключаем скролл для всей сетки
            // gap={4}
        >
            <GridItem area='header'>
                <Header />
            </GridItem>

            <GridItem area='nav' h='100%' overflow='hidden' position='relative'>
                <Box>
                    <Box>
                        <Navigation />
                    </Box>
                    <Footer />
                </Box>
            </GridItem>

            <GridItem
                area='main'
                overflowY='auto' // Скролл только для main
            >
                <Box className='mainContainer' display='flex' justifyContent='space-between'>
                    <Outlet />
                    <Box
                        h='calc(100vh - 114px)'
                        position='sticky'
                        top='0'
                        alignSelf='flex-start'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='space-between'
                        mr='40px'
                    >
                        <MainIcons />
                        <WriteRecipe />
                    </Box>
                </Box>
            </GridItem>
            {/* 
            <GridItem area='footer'>
                <Footer />
            </GridItem> */}
        </Grid>
    );
}

export default Layout;
