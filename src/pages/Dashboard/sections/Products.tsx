import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryDarkColor,
} from "../../../utils/constant/theme";
import { products } from "../../../../public/database.json";

const Products = () => {
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryDarkColor}
      margin={"20px"}
      borderRadius={"12px"}
      id="Products"
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "3xl" }}
        color={primaryTextDarkColor}
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
          <Stack
            key={index}
            width={{ base: "45%", lg: "220px" }}
            objectFit={"contain"}
            cursor={"pointer"}
            transition={"0.5s"}
            _hover={{ transform: "translateY(-10px)" }}
          >
            <Image src={`/assets/Products/${item.src}`} loading="lazy" />
            <Text color={primaryTextDarkColor} as={"b"}>
              {item.title}
            </Text>
          </Stack>
        ))}
      </HStack>
    </Stack>
  );
};

export default Products;
