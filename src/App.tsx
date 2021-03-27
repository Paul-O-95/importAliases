import * as React from "react";
import { ChakraProvider, Box, Image } from "@chakra-ui/react";
import { Imageurl } from "@interfaces/ImageData";
import { getImage } from "./services/images.service";
import { extendTheme } from "@chakra-ui/react";
import Header from "@components/Header";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import { Logo } from "./Logo";
const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      body: {
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
      },
    },
  },
});
export const App = () => {
  const [imageData, setImageData] = React.useState<Imageurl>();
  const [count, setCount] = React.useState<number>(0);
  React.useEffect(() => {
    const response: Imageurl = getImage(count);
    setImageData(response);
    console.log(imageData);
  }, [count, imageData]);
  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100vw"
        h="100vh"
        bg={`url(${imageData?.src}) no-repeat center/cover`}
      >
        <Image
          src={imageData?.src}
          alt={imageData?.alt}
          boxSize="100%"
          objectFit="cover"
          pos="relative"
        ></Image>
        <Box
          pos="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          boxSize="80%"
          m="auto"
          px="20px"
          pt="15px"
          py="12px"
          align="center"
          border="3px solid"
          borderColor="gray.300"
          borderRadius="12px"
        >
          <Header />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
