import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box mt={"50px"} bg="#FFE7CC" color="#0b3954" fontFamily="Poppins">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          m="auto"
          spacing={{ base: 10, sm: 100, md: 150 }}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Box as="a" href={"#"}>
              Overview
            </Box>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"#"}>
                Features
              </Box>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              Releases
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About Us
            </Box>
            <Box as="a" href={"#"}>
              Careers
            </Box>
            <Box as="a" href={"#"}>
              Contact Us
            </Box>
            <Box as="a" href={"#"}>
              Partners
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Branches</ListHeader>
            <Box as="a" href={"#"}>
              Chennai
            </Box>
            <Box as="a" href={"#"}>
              Mumbai
            </Box>
            <Box as="a" href={"#"}>
              Kolkata
            </Box>
            <Box as="a" href={"#"}>
              Delhi
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Need Help ?</ListHeader>
            <Box as="a" href={"#"} color={"#ffb128"} fontWeight={"500"}>
              +91 7994059967
            </Box>
            <Box as="a" href={"#"} color={"#ffb128"} fontWeight={"500"}>
              +91 000 000 000
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image w="190px" src={"https://i.ibb.co/Ph12X57/utc.png"} />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          2023 CookEase | @MERN Stack | All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
