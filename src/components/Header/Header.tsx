import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { containerSx } from '~/constants/styles';

import logo from './../../assets/header/logo.svg';
import { headerBreadcrumbLink, headerEmail, headerName } from './HeaderStyles';

function Header() {
    return (
        <Box as='header' bg='rgba(255, 255, 211, 1)' pt='16px' pb='16px'>
            <Box sx={containerSx}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <Image mr={128} src={logo} alt='logo' />
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    as={RouterLink}
                                    to='/'
                                    sx={headerBreadcrumbLink}
                                    isCurrentPage
                                >
                                    Главная
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                    <Box display='flex' alignItems='center' gap='12px'>
                        <Avatar
                            name='Екатерина Константинопольская'
                            src='https://bit.ly/dan-abramov'
                        />
                        <Box>
                            <Text sx={headerName}>Екатерина Константинопольская</Text>
                            <Text sx={headerEmail}>@bake_and_pie</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
