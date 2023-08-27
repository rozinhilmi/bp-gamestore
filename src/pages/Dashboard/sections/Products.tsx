import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";

const Products = () => {
  const products: any = [
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
      id="Products"
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "3xl" }}
        color={primaryTextColor}
        textAlign={"center"}
      >
        Daftar Produk yang Tersedia
      </Text>

      <HStack
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"center"}
        my={"30px"}
      >
        {products.map((item: any, index: number) => (
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
    </Stack>
  );
};

export default Products;
