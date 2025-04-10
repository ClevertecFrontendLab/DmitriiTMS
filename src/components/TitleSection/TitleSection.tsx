import { Heading } from '@chakra-ui/react';

type TitleSectionProps = {
    text: string;
};

function TitleSection({ text }: TitleSectionProps) {
    return (
        <Heading as='h2' fontFamily='Inter' fontSize='48px' fontWeight='500' mb='18px'>
            {text}
        </Heading>
    );
}

export default TitleSection;
