import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import icon1 from '../../assets/mainIcons/icon-1.svg';
import icon2 from '../../assets/mainIcons/icon-2.svg';
import icon3 from '../../assets/mainIcons/icon-3.svg';

const icons = [
    { id: 1, src: icon1, count: 185 },
    { id: 2, src: icon2, count: 589 },
    { id: 3, src: icon3, count: 587 },
];

function MainIcons() {
    return (
        <Box mt='24px'>
            <UnorderedList styleType='none' margin={0}>
                {icons.map((item) => (
                    <ListItem key={item.id} display='flex' gap='8px' mb='40px'>
                        <Image src={item.src} alt='icon' />
                        <Text fontFamily='Inter' fontWeight='600' fontSize='16px' color='#2db100'>
                            {item.count}
                        </Text>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default MainIcons;
