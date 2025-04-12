import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

import downArrow from '../../assets/navbar/arrow/downArrow.svg';
import upArrow from '../../assets/navbar/arrow/upArrow.svg';
import icon1 from '../../assets/navigation/icon-1.svg';
import icon2 from '../../assets/navigation/icon-2.svg';
import icon3 from '../../assets/navigation/icon-3.svg';
import icon4 from '../../assets/navigation/icon-4.svg';
import icon5 from '../../assets/navigation/icon-5.svg';
import icon6 from '../../assets/navigation/icon-6.svg';
import icon7 from '../../assets/navigation/icon-7.svg';
import icon8 from '../../assets/navigation/icon-8.svg';
import icon9 from '../../assets/navigation/icon-9.svg';
import icon10 from '../../assets/navigation/icon-10.svg';
import icon11 from '../../assets/navigation/icon-11.svg';
import icon12 from '../../assets/navigation/icon-12.svg';
import icon13 from '../../assets/navigation/icon-13.svg';

const mockMenu = [
    { id: 1, title: 'Салаты', icon: icon1 },
    { id: 2, title: 'Закуски', icon: icon2 },
    { id: 3, title: 'Первые блюда', icon: icon3 },
    { id: 4, title: 'Вторые блюда', icon: icon4 },
    { id: 5, title: 'Десерты, выпечка', icon: icon5 },
    {
        id: 6,
        title: 'Блюда на гриле',
        icon: icon6,
    },
    {
        id: 7,
        title: 'Веганская кухня',
        icon: icon7,

        subTitle: [
            { id: 1, path: '/1', title: 'Закуски' },
            { id: 2, path: '/2', title: 'Первые блюда' },
            { id: 3, path: '/secondcourses', title: 'Вторые блюда' },
            { id: 4, path: '/4', title: 'Гарниры' },
            { id: 5, path: '/5', title: 'Десерты' },
            { id: 6, path: '/6', title: 'Выпечка' },
            { id: 7, path: '/7', title: 'Сыроедческие блюда' },
            { id: 8, path: '/8', title: 'Напитки' },
        ],
    },
    { id: 8, title: 'Детские блюда', icon: icon8 },
    { id: 9, title: 'Лечебное питание', icon: icon9 },
    { id: 10, title: 'Национальные', icon: icon10 },
    { id: 11, title: 'Соусы', icon: icon11 },
    { id: 12, title: 'Напитки', icon: icon12 },
    { id: 13, title: 'Заготовки', icon: icon13 },
];

type NavigationProps = {
    setClickItem: (value: boolean) => void;
};

function Navigation({ setClickItem }: NavigationProps) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        if (expandedId && expandedId > -1) {
            setClickItem(expandedId !== null);
        } else {
            setClickItem(false);
        }
    }, [expandedId, setClickItem]);

    return (
        <Box
            h='full'
            overflowX='hidden'
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
                <Accordion
                    allowToggle
                    onChange={(index) => setExpandedId(index as number)}
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                    pl='20px'
                    pt='34px'
                >
                    {mockMenu.map((item) => (
                        <AccordionItem key={item.id} borderWidth='0'>
                            {({ isExpanded }) => (
                                <>
                                    <AccordionButton
                                        p={0}
                                        mb={isExpanded ? '10px' : ''}
                                        bg={isExpanded ? '#eaffc7' : ''}
                                        pl='4px'
                                        _hover={{ backgroundColor: 'none' }}
                                    >
                                        <Box
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='space-between'
                                            width='230px'
                                        >
                                            <Box display='flex' alignItems='center' gap='8px'>
                                                <Image
                                                    src={item.icon}
                                                    alt='icon'
                                                    w='24px'
                                                    h='24px'
                                                />
                                                <Box
                                                    as='span'
                                                    fontFamily='Inter'
                                                    fontSize='16px'
                                                    line-height='150%'
                                                    fontWeight={isExpanded ? '700' : '500'}
                                                    pt='12px'
                                                    pb='12px'
                                                >
                                                    {item.title}
                                                </Box>
                                            </Box>
                                            <Box pr='14px'>
                                                {isExpanded ? (
                                                    <Image src={upArrow} alt='upArrow' />
                                                ) : (
                                                    <Image src={downArrow} alt='downArrow' />
                                                )}
                                            </Box>
                                        </Box>
                                    </AccordionButton>

                                    <AccordionPanel borderWidth='0' p={0} pl='36px'>
                                        {item.subTitle && (
                                            <List spacing={3}>
                                                {item.subTitle.map((elem) => (
                                                    <ListItem key={elem.id}>
                                                        <NavLink
                                                            to={elem.path}
                                                            style={({ isActive }) => ({
                                                                fontWeight: isActive
                                                                    ? '700'
                                                                    : '500',
                                                            })}
                                                        >
                                                            {({ isActive }) => (
                                                                <Box
                                                                    display='flex'
                                                                    alignItems='center'
                                                                    gap='8px'
                                                                >
                                                                    <Box
                                                                        position='relative'
                                                                        as='span'
                                                                        display='inline-block'
                                                                        w='8px'
                                                                        h='28px'
                                                                        bg='#c4ff61'
                                                                    >
                                                                        {!isActive && (
                                                                            <Box
                                                                                position='absolute'
                                                                                top={0}
                                                                                left={0}
                                                                                as='span'
                                                                                display='inline-block'
                                                                                w='7px'
                                                                                h='28px'
                                                                                bg='#fff'
                                                                            ></Box>
                                                                        )}
                                                                    </Box>
                                                                    <Box as='span'>
                                                                        {elem.title}
                                                                    </Box>
                                                                </Box>
                                                            )}
                                                        </NavLink>
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
