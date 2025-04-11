import { Box } from '@chakra-ui/react';

import icon1 from '../../assets/cardsCooking/icn-1.svg';
import icon2 from '../../assets/cardsCooking/icn-2.svg';
import CardCooking from '../CardCooking/CardCooking';

const cardsCooking = [
    {
        id: 1,
        imageIcon: icon1,
        text: 'Стейк для вегетарианцев',
    },
    {
        id: 2,
        imageIcon: icon1,
        text: 'Котлеты из гречки и фасоли',
    },
    {
        id: 3,
        imageIcon: icon2,
        text: 'Сырный суп с лапшой и брокколи',
    },
];

function CardsCooking() {
    return (
        <Box flex='1 1 50%' display='flex' flexDirection='column' gap='12px' h='192px'>
            {cardsCooking.map((card) => (
                <CardCooking key={card.id} {...card} />
            ))}
        </Box>
    );
}

export default CardsCooking;
