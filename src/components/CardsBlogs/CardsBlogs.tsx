import { Box } from '@chakra-ui/react';

import CardBlog from '../CardBlog/CardBlog';

const cardsBlogs = [
    {
        id: 1,
        title: 'Елена Высоцкая',
        email: '@elenapovar',
        avatar: 'https://bit.ly/sage-adebayo',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        title: 'Alex Cook',
        email: '@funtasticooking',
        avatar: 'https://bit.ly/sage-adebayo',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        title: 'Екатерина Константинопольская',
        email: '@bake_and_pie',
        avatar: 'https://bit.ly/sage-adebayo',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

function CardsBlogs() {
    return (
        <Box display='flex' gap='16px'>
            {cardsBlogs.map((blog) => (
                <CardBlog key={blog.id} {...blog} />
            ))}
        </Box>
    );
}

export default CardsBlogs;
