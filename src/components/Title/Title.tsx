import { Heading } from '@chakra-ui/react';

type TitleProps = {
    title: string;
};

function Title({ title }: TitleProps) {
    return (
        <Heading
            textAlign='center'
            as='h1'
            m='27px 0 !important'
            fontFamily='Inter'
            fontSize='48px'
            fontWeight='700'
        >
            {title}
        </Heading>
    );
}

export default Title;
