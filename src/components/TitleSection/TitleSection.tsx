import { Heading } from '@chakra-ui/react';

type TitleSectionProps = {
    text: string;
    fs: string;
    fw: string;
    flex?: string;
};

function TitleSection({ text, fs, fw, flex }: TitleSectionProps) {
    return (
        <Heading as='h2' fontFamily='Inter' fontSize={fs} fontWeight={fw} mb='18px' flex={flex}>
            {text}
        </Heading>
    );
}

export default TitleSection;
