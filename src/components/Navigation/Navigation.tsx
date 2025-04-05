import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router';

import downArrow from '../../assets/navbar/arrow/downArrow.svg';
import upArrow from '../../assets/navbar/arrow/upArrow.svg';
import { accordionButton } from './NavigationStyles';

const mockMenu = [
    { id: 1, title: 'Салаты' },
    { id: 2, title: 'Закуски' },
    { id: 3, title: 'Первые блюда' },
    { id: 4, title: 'Вторые блюда' },
    { id: 5, title: 'Десерты, выпечка' },
    { id: 6, title: 'Блюда на гриле' },
    {
        id: 7,
        title: 'Веганская кухня',
        subTitle: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Выпечка',
            'Сыроедческие блюда',
            'Напитки',
        ],
    },
    { id: 8, title: 'Детские блюда' },
    { id: 9, title: 'Лечебное питание' },
    { id: 10, title: 'Национальные' },
    { id: 11, title: 'Соусы' },
    { id: 12, title: 'Напитки' },
    { id: 13, title: 'Заготовки' },
];

function Navigation() {
    return (
        <Box
            h='full'
            overflowY='auto'
            css={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '3px',
                },
            }}
        >
            <Box maxH='872px'>
                <Accordion allowToggle>
                    {mockMenu.map((item) => (
                        <AccordionItem key={item.id} borderWidth='0'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton _expanded={accordionButton}>
                                            <Box as='span' flex='1' textAlign='left'>
                                                <Text>{item.title}</Text>
                                            </Box>
                                            {isExpanded ? (
                                                <Image src={upArrow} alt='upArrow' />
                                            ) : (
                                                <Image src={downArrow} alt='downArrow' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel borderWidth='0'>
                                        {item.subTitle && (
                                            <List spacing={3}>
                                                {item.subTitle.map((elem, index) => (
                                                    <ListItem key={index}>
                                                        <NavLink to='#'>{elem}</NavLink>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </Box>
    );
}

export default Navigation;
