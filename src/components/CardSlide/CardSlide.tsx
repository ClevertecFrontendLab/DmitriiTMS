import { Box, Card, CardBody, Heading, Image, Stack, Tag, TagLabel, Text } from '@chakra-ui/react';

import styles from './CardSlide.module.css';

type CardSlideProps = {
    title: string;
    text: string;
    src: string;
    tag: string;
    like?: string;
    smile?: string;
    tagIcon: string;
};

function CardSlide({ title, text, src, tag, like, smile, tagIcon }: CardSlideProps) {
    return (
        <Card className={styles.card}>
            <CardBody p={0}>
                <Image src={src} alt='imgs' className={styles.cardImage} />
                <Stack className={styles.cardContent}>
                    <Heading className={styles.cardTitle}>{title}</Heading>
                    <Text noOfLines={3} className={styles.cardText}>
                        {text}
                    </Text>
                    <Box className={styles.cardFooter}>
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
                                    <Text className={styles.reactionCount}>1</Text>
                                </Box>
                            )}
                            {smile && (
                                <Box className={styles.reactionItem}>
                                    <Image
                                        src={smile}
                                        alt='smile'
                                        className={styles.reactionIcon}
                                    />
                                    <Text className={styles.reactionCount}>2</Text>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CardSlide;
