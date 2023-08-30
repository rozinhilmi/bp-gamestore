import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryDarkColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

const OurClients = (props: { clients: any }) => {
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryDarkColor}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      alignItems={"center"}
      id="OurClients"
    >
      <Button colorScheme="blue" width={"250px"}>
        Klien dan Partner Bisnis Kami
      </Button>

      <Stack alignItems={"center"} my={"30px"}>
        <Text
          as={"b"}
          fontSize={{ base: "2xl", lg: "4xl" }}
          textAlign={"center"}
          color={primaryTextDarkColor}
        >
          Jumlah Reseller
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={secondaryTextColor}
        >
          Gampang kari ngedit
        </Text>
      </Stack>

      <HStack
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"center"}
        my={"30px"}
      >
        {props.clients.map((item: any, index: number) => (
          <Stack
            key={index}
            width={{ base: "45%", lg: "220px" }}
            objectFit={"contain"}
          >
            <Image src={`/assets/Products/${item.src}`} loading="lazy" />
            <Text color={primaryTextDarkColor} as={"b"}>
              {item.title}
            </Text>
          </Stack>
        ))}
      </HStack>
      <Text
        as={"b"}
        fontSize={"3xl"}
        textAlign={"center"}
        color={primaryTextDarkColor}
      >
        150+ Client Lainya
      </Text>
    </Stack>
  );
};

export default OurClients;
