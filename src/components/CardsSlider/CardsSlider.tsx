import { Box } from '@chakra-ui/react';

import img1 from '../../assets/main/slider/image-1.jpg';
import img2 from '../../assets/main/slider/image-2.jpg';
import img3 from '../../assets/main/slider/image-3.jpg';
import img4 from '../../assets/main/slider/image-4.jpg';
import likeImg from '../../assets/main/slider/like.svg';
import smileImg from '../../assets/main/slider/smile.svg';
import tagIcon1 from '../../assets/main/slider/tagIcon-1.svg';
import tagIcon2 from '../../assets/main/slider/tagIcon-2.svg';
import tagIcon3 from '../../assets/main/slider/tagIcon-3.svg';
import tagIcon4 from '../../assets/main/slider/tagIcon-4.svg';
import CardSlide from '../CardSlide/CardSlide';

const slider = [
    {
        id: 1,
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        src: img1,
        tag: 'Первые блюда',
        like: likeImg,
        tagIcon: tagIcon1,
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        src: img2,
        tag: 'Веганские блюда',
        like: likeImg,
        smile: smileImg,
        tagIcon: tagIcon2,
    },
    {
        id: 3,
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        src: img3,
        tag: 'Десерты, выпечка',
        smile: smileImg,
        tagIcon: tagIcon3,
    },
    {
        id: 4,
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное ',
        src: img4,
        tag: 'Салаты',
        tagIcon: tagIcon4,
    },
];

function CardsSlider() {
    return (
        <Box display='flex' alignItems='center' gap='24px'>
            {slider.map((item) => (
                <CardSlide key={item.id} {...item} />
            ))}
        </Box>
    );
}

export default CardsSlider;
