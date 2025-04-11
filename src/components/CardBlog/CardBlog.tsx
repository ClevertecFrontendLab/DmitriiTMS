import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

type CardBlogProps = {
    title: string;
    email: string;
    avatar: string;
    text: string;
};

function CardBlog({ title, email, avatar, text }: CardBlogProps) {
    return (
        <Card maxW='lg' h='184px' p='24px 24px 20px 24px'>
            <CardHeader p={0} mb='28px'>
                <Flex>
                    <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' src={avatar} />
                        <Box>
                            <Heading fontFamily='Inter' fontSize='18px' fontWeight='500'>
                                {title}
                            </Heading>
                            <Text>{email}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody p={0}>
                <Text fontFamily='Inter' fontSize='14px' fontWeight='400'>
                    {text}
                </Text>
            </CardBody>
        </Card>
    );
}

export default CardBlog;
