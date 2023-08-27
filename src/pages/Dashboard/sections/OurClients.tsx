import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";

const OurClients = () => {
  const clients: any = [
    {
      title: "Mobile Legend",
      src: "Mobile Legend.webp",
    },
    {
      title: "Pubg Mobile",
      src: "Pubg Mobile.webp",
    },
    {
      title: "Free Fire",
      src: "Free Fire.webp",
    },

    {
      title: "Fifa Mobile",
      src: "Fifa Mobile.webp",
    },
    {
      title: "AOV",
      src: "AOV.webp",
    },
    {
      title: "COD Mobile",
      src: "COD Mobile.webp",
    },
    {
      title: "Domino",
      src: "Domino.webp",
    },
  ];
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryColor}
      margin={"20px"}
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
          color={primaryTextColor}
        >
          Dipercaya Oleh Klien & Perusahaan Ternama
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={primaryTextColor}
        >
          Dengan fokus kami yang tak pernah padam, kami bertekad untuk terus
          memberikan kepuasan yang tak terhingga kepada pengguna dan klien kami.
        </Text>
      </Stack>

      <HStack
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"center"}
        my={"30px"}
      >
        {clients.map((item: any, index: number) => (
          <Stack key={index}>
            <Image
              src={`/assets/Products/${item.src}`}
              width={"220px"}
              objectFit={"contain"}
            />
            <Text color={primaryTextColor} as={"b"}>
              {item.title}
            </Text>
          </Stack>
        ))}
      </HStack>
      <Text
        as={"b"}
        fontSize={"3xl"}
        textAlign={"center"}
        color={primaryTextColor}
      >
        150+ Client Lainya
      </Text>
    </Stack>
  );
};

export default OurClients;
