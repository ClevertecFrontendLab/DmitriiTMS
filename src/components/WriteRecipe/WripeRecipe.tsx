import { Box, Image, Text } from '@chakra-ui/react';

import writeRecipe from '../../assets/mainIcons/write-recipe.svg';

function WriteRecipe() {
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box
                h='108px'
                w='108px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
            >
                <Image w='48px' h='48px' src={writeRecipe} />
            </Box>

            <Text
                fontFamily='Inter'
                fontWeight='400'
                fontSize='12px'
                lineHeight='133%'
                color='rgba(0, 0, 0, 0.64)'
                p={0}
            >
                Записать рецепт
            </Text>
        </Box>
    );
}

export default WriteRecipe;
