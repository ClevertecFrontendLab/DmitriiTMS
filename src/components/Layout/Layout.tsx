import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

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
                <Navigation />
            </GridItem>

            <GridItem
                area='main'
                overflowY='auto' // Скролл только для main
            >
                <Outlet />
            </GridItem>

            {/* Подвал */}
            <GridItem area='footer'>Fotter</GridItem>
        </Grid>
    );
}

export default Layout;
