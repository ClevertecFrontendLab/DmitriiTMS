import { Heading } from '@chakra-ui/react';

type TitleSectionProps = {
    text: string;
    fs: string;
    fw: string;
};

function TitleSection({ text, fs, fw }: TitleSectionProps) {
    return (
        <Heading as='h2' fontFamily='Inter' fontSize={fs} fontWeight={fw} mb='18px'>
            {text}
        </Heading>
    );
}

export default TitleSection;
