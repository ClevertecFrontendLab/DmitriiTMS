import { Text } from '@chakra-ui/react';

type TextRecipeProps = {
    text: string;
};

function TextRecipe({ text }: TextRecipeProps) {
    return (
        <Text
            fontFamily='Inter'
            fontWeight='500'
            fontSize='16px'
            lineHeight='150%'
            color='rgba(0, 0, 0, 0.64)'
            p={0}
            flex='1 1 50%'
        >
            {text}
        </Text>
    );
}
export default TextRecipe;
