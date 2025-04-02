import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from '@chakra-ui/react';

import { containerSx } from '~/constants/styles';

import logo from './../../assets/header/logo.svg';

function Header() {
    return (
        <Box sx={containerSx}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <Image mr={128} src={logo} alt='logo' />
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                isCurrentPage
                                href='/'
                                fontFamily='Roboto'
                                fontWeight='400'
                                fontSize='16px'
                                lineHeight='150%'
                                textAlign='center'
                                color='#000'
                                textDecoration='none'
                            >
                                Главная
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
