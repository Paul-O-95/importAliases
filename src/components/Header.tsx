import React from "react";
import { Box, HStack, Icon, Text, Link } from "@chakra-ui/react";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Header = () => {
  return (
    <HStack spacing={5}>
      <Box w="32%" textAlign="left">
        <Icon as={RiBarChartHorizontalLine} w={6} h={6}></Icon>
      </Box>
      <Box w="32%">
        <Text>Image Bg</Text>
      </Box>
      <Box w="32%" textAlign="right">
        <Link>About Us</Link>
      </Box>
    </HStack>
  );
};

export default Header;
