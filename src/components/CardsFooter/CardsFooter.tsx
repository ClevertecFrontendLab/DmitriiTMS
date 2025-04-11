import { Box } from '@chakra-ui/react';

import tagIcon from '../../assets/juicy/skovoroda.svg';
import likeImg from '../../assets/main/slider/like.svg';
import smileImg from '../../assets/main/slider/smile.svg';
import CardSlide from '../CardSlide/CardSlide';

const cardsFooter = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        tag: 'Вторые блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon,
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        tag: 'Вторые блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon,
    },
];

function CardsFooter() {
    return (
        <Box display='flex' alignItems='center' gap='24px'>
            {cardsFooter.map((item) => (
                <CardSlide key={item.id} {...item} bgTag={true} paddingFooter={true} />
            ))}
        </Box>
    );
}

export default CardsFooter;
