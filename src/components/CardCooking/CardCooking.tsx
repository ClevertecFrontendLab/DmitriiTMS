import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react';

type CardCookingProps = {
    imageIcon: string;
    text: string;
};

function CardCooking({ imageIcon, text }: CardCookingProps) {
    return (
        <Card>
            <CardBody
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                p='12px 28px'
            >
                <Box display='flex' alignItems='center' gap='12px'>
                    <Image src={imageIcon} alt='imgs' />
                    <Text
                        fontFamily='Inter'
                        fontWeight='500'
                        fontSize='20px'
                        lineHeight='140%'
                        color='#000'
                    >
                        {text}
                    </Text>
                </Box>

                <Button
                    width='87px'
                    height='32px'
                    border='1px solid #2db100 !important'
                    borderRadius='6px !important'
                    bg='transparent'
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='14px'
                    lineHeight='143%'
                    color='#2db100'
                >
                    Готовить
                </Button>
            </CardBody>
        </Card>
    );
}

export default CardCooking;
