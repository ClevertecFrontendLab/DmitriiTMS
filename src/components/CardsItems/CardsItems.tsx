import { Box } from '@chakra-ui/react';

import img1 from '../../assets/juicy/img-1.jpg';
import img2 from '../../assets/juicy/img-2.jpg';
import img3 from '../../assets/juicy/img-3.jpg';
import img4 from '../../assets/juicy/img-4.jpg';
import likeImg from '../../assets/juicy/like.svg';
import tagIcon from '../../assets/juicy/skovoroda.svg';
import smileImg from '../../assets/juicy/smile.svg';
import CardItem from '../CardItem/CardItem';

const cardsItems = [
    {
        id: 1,
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: img1,
        tag: 'Вторые блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon,
    },
    {
        id: 2,
        title: 'Пряная ветчина по итальянски',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: img3,
        tag: 'Вторые блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon,
        name: 'Елена Высоцкая',
    },
    {
        id: 3,
        title: 'Лапша с курицей и шафраном',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: img2,
        tag: 'Вторые блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon,
        name: 'Alex Cook',
    },
    {
        id: 4,
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: img4,
        tag: 'Вторые блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon,
    },
];

function CardsItems() {
    return (
        <Box display='flex' flexWrap='wrap' gap='24px'>
            {cardsItems.map((item) => (
                <CardItem key={item.id} {...item} />
            ))}
        </Box>
    );
}

export default CardsItems;
