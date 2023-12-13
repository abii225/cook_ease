import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box bg={"#FFE7CC"}>
        <Box m={"100px"}>
          <Flex w={"80%"} m={"auto"} justifyContent={"space-between"}>
            <Flex
              w={"50%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box>
                <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-contact-icon1.png"></Image>
              </Box>
              <Box>
                <Text fontFamily={"DM Serif Display"} fontSize={26}>
                  +61 (0) 383 766 284
                </Text>
              </Box>
            </Flex>
            <Flex
              w={"50%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box>
                <Image src="https://themes.muffingroup.com/be/charity3/wp-content/uploads/2020/04/ngo2-contact-icon2.png"></Image>
              </Box>
              <Box>
                <Text fontFamily={"DM Serif Display"} fontSize={26}>
                  CookEase@gmail.com
                </Text>
              </Box>
            </Flex>
            <Flex w={"40%"} justifyContent={"center"} alignItems={"center"}>
              <Box w={"10%"} m={"auto 10px"}>
                <a href="https://www.facebook.com/">
                  <Image
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4vfut6aghkegjfudn6v3.png"
                    alt=""
                  />
                </a>
              </Box>
              <Box w={"10%"} m={"auto 10px"}>
                <a href="https://www.twitter.com/">
                  <Image
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7uaeuzqc4g4zqnm2ynjk.png"
                    alt=""
                  />
                </a>
              </Box>
              <Box w={"10%"} m={"auto 10px"}>
                <a href="https://www.youtube.com/">
                  <Image
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wfppngj04rz0rgsvc5kg.png"
                    alt=""
                  />
                </a>
              </Box>
            </Flex>
          </Flex>
          <br />
          <Divider w={"100%"} m={"auto"} />
        </Box>
        <Box>
          <Box w={"100%"} m={"auto"} mb={"100px"}>
            <Image
              m={"auto"}
              src="https://i.ibb.co/THtf5pd/cookease.png"
            ></Image>
            <Text
              m={"10px auto"}
              color={"#666666"}
              fontWeight={"300"}
              fontSize={"15px"}
              w={"60%"}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              porta urna.
            </Text>
          </Box>
        </Box>
        <Divider />
        <Flex w={"80%"} m={"20px auto"} justifyContent={"space-between"}>
          <Flex w={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box>
              <Text color={"#666666"} fontWeight={"300"} fontSize={"15px"}>
                © 2023 CookEase | All Rights Reserved | Powered by MERN
              </Text>
            </Box>
          </Flex>
          <Flex w={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box>
              <Link href="#">Go To Top </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
