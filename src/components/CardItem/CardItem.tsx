import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';

import styles from './CardItem.module.css';

type CardItemProps = {
    title: string;
    text: string;
    src: string;
    tag: string;
    like?: string;
    smile?: string;
    tagIcon: string;
    name?: string;
};

function CardItem({ title, text, src, tag, like, smile, tagIcon, name }: CardItemProps) {
    return (
        <Card
            direction='row'
            overflow='hidden'
            variant='outline'
            borderRadius='8px'
            flex='0 1 49%'
            height='244px'
        >
            <Box position='relative'>
                <Image objectFit='cover' maxW='346px' src={src} alt='img' />
                {name && (
                    <Box className={styles.name}>
                        <Box display='flex' alignItems='center' gap='4px'>
                            <Avatar
                                name='Dan Abrahmov'
                                src='https://bit.ly/dan-abramov'
                                w='16px'
                                h='16px'
                            />
                            <span>{name} рекомендует</span>
                        </Box>
                    </Box>
                )}
            </Box>

            <Stack p='20px 24px'>
                <CardBody p={0}>
                    <Box className={styles.tagWrraper} mb='24px'>
                        <Box>
                            <Tag className={styles.tag}>
                                <Image src={tagIcon} alt='imgs' />
                                <TagLabel className={styles.tagLabel}>{tag}</TagLabel>
                            </Tag>
                        </Box>
                        <Box className={styles.reactions}>
                            {like && (
                                <Box className={styles.reactionItem}>
                                    <Image
                                        src={like}
                                        alt='ilikemgs'
                                        className={styles.reactionIcon}
                                    />
                                    <Text className={styles.reactionCount}>123</Text>
                                </Box>
                            )}
                            {smile && (
                                <Box className={styles.reactionItem}>
                                    <Image
                                        src={smile}
                                        alt='smile'
                                        className={styles.reactionIcon}
                                    />
                                    <Text className={styles.reactionCount}>224</Text>
                                </Box>
                            )}
                        </Box>
                    </Box>

                    <Box>
                        <Heading className={styles.title}>{title}</Heading>
                        <Text noOfLines={3} className={styles.text}>
                            {text}
                        </Text>
                    </Box>
                </CardBody>

                <CardFooter p={0} display='flex' justifyContent='flex-end'>
                    <Box display='flex' alignItems='center' gap='8px'>
                        <Button
                            colorScheme='teal'
                            variant='outline'
                            color='#000'
                            width='122px'
                            className={styles.btn}
                        >
                            <Image src={like} alt='ilikemgs' mr='10px' />
                            <span>Сохранить</span>
                        </Button>
                        <Button
                            variant='solid'
                            bg='black'
                            color='#fff'
                            width='87px'
                            className={styles.btn}
                        >
                            Готовить
                        </Button>
                    </Box>
                </CardFooter>
            </Stack>
        </Card>
    );
}

export default CardItem;
