import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Switch,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';

import { BtnFilterIcon } from '~/components/Icons/BtnFilterIcon';
import Title from '~/components/Title/Title';

import arrowLeft from '../../assets/main/slider/arrowLeft.svg';
import arrowRight from '../../assets/main/slider/arrowRight.svg';
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
import styles from './home-page.module.css';

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

function HomePage() {
    return (
        <Box maxWidth='1360px' marginLeft='24px'>
            <Title title='Приятного аппетита!' />

            <Box className={styles.container}>
                <Button
                    w='48px'
                    h='48px'
                    p={0}
                    bg='transparent'
                    variant='outline'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius='6px'
                >
                    <BtnFilterIcon />
                </Button>
                <InputGroup maxWidth='458px'>
                    <InputRightElement pointerEvents='none' paddingTop='10px'>
                        <SearchIcon />
                    </InputRightElement>
                    <Input
                        height='48px'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        type='text'
                        placeholder='Название или ингридиент...'
                        _placeholder={{
                            color: '#134b00',
                            fontFamily: 'Inter',
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                    />
                </InputGroup>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                gap='18px'
                marginBottom='56px'
            >
                <Box>
                    <FormControl display='flex' gap='12px' alignItems='center'>
                        <FormLabel
                            fontFamily='Inter'
                            fontWeight='500'
                            fontSize='16px'
                            color='#000'
                            marginRight='0'
                            marginBottom='2px'
                            cursor='pointer'
                            htmlFor='allergens'
                        >
                            Исключить мои аллергены
                        </FormLabel>
                        <Switch id='allergens' />
                    </FormControl>
                </Box>
                <Box>
                    <Select
                        placeholder='Выберите из списка...'
                        height='40px'
                        width='234px'
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>

            <Box>
                <Heading as='h2' fontFamily='Inter' fontSize='48px' fontWeight='500' mb='18px'>
                    Новые рецепты
                </Heading>
                <Box position='relative'>
                    <Button
                        variant='solid'
                        bg='#000'
                        w='48px'
                        h='48px'
                        position='absolute'
                        left='-6px'
                        zIndex={2}
                        top='40%'
                        transform='translateY(-40%)'
                    >
                        <Image src={arrowLeft} alt='arrowLeft' />
                    </Button>

                    <Box display='flex' alignItems='center' gap='24px'>
                        {slider.map((item) => (
                            <Card
                                key={item.id}
                                maxW='sm'
                                borderRadius='6px 6px 0 0'
                                overflow='hidden'
                                flex='0 1 322px'
                            >
                                <CardBody p={0}>
                                    <Image
                                        src={item.src}
                                        alt='imgs'
                                        height='230px'
                                        borderRadius='6px 6px 0 0'
                                    />
                                    <Stack padding='16px 24px 20px'>
                                        <Heading
                                            as='h5'
                                            fontFamily='Inter'
                                            fontSize='20px'
                                            fontWeight='500'
                                            whiteSpace='nowrap'
                                            overflow='hidden'
                                            textOverflow='ellipsis'
                                            maxWidth='274px'
                                            mb='4px'
                                        >
                                            {item.title}
                                        </Heading>
                                        <Text
                                            noOfLines={3}
                                            fontFamily='Inter'
                                            fontWeight='400'
                                            fontSize='14px'
                                            marginBottom='16px'
                                        >
                                            {item.text}
                                        </Text>
                                        <Box
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='space-between'
                                        >
                                            <Box>
                                                <Tag
                                                    display='flex'
                                                    alignItems='center'
                                                    gap='6px'
                                                    borderRadius='4px'
                                                    variant='solid'
                                                    bg='#d7ff94'
                                                >
                                                    <Image src={item.tagIcon} alt='imgs' />
                                                    <TagLabel
                                                        fontFamily='Inter'
                                                        fontWeight='400'
                                                        fontSize='14px'
                                                        color='#000'
                                                    >
                                                        {item.tag}
                                                    </TagLabel>
                                                </Tag>
                                            </Box>

                                            <Box display='flex' alignItems='center' gap='8px'>
                                                {item.like && (
                                                    <Box
                                                        display='flex'
                                                        alignItems='center'
                                                        gap='4px'
                                                    >
                                                        <Image
                                                            src={item.like}
                                                            alt='ilikemgs'
                                                            width='12px'
                                                            height='12px'
                                                        />
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontWeight='600'
                                                            fontSize='12px'
                                                            color='#2db100'
                                                        >
                                                            1
                                                        </Text>
                                                    </Box>
                                                )}
                                                {item.smile && (
                                                    <Box
                                                        display='flex'
                                                        alignItems='center'
                                                        gap='4px'
                                                    >
                                                        <Image
                                                            src={item.smile}
                                                            alt='smile'
                                                            width='12px'
                                                            height='12px'
                                                        />
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontWeight='600'
                                                            fontSize='12px'
                                                            color='#2db100'
                                                        >
                                                            2
                                                        </Text>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </Box>

                    <Button
                        variant='solid'
                        bg='#000'
                        w='48px'
                        h='48px'
                        position='absolute'
                        right='-6px'
                        zIndex={2}
                        top='40%'
                        transform='translateY(-40%)'
                    >
                        <Image src={arrowRight} alt='arrowRight' />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
