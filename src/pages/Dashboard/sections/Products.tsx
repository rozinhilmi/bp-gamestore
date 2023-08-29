import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryDarkColor,
} from "../../../utils/constant/theme";
import {
  products,
  list_category_product,
} from "../../../../public/database.json";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory]: any = useState("");
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryDarkColor}
      margin={"20px"}
      borderRadius={"12px"}
      id="Products"
      gap={"30px"}
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "3xl" }}
        color={primaryTextDarkColor}
        textAlign={"center"}
      >
        Daftar Produk yang Tersedia
      </Text>

      <HStack flexWrap={"wrap"} justifyContent={"center"}>
        <Button
          color={primaryTextDarkColor}
          backgroundColor={
            selectedCategory === "" ? "rgb(49, 130, 206)" : "rgb(43, 54, 80)"
          }
          _hover={{
            backgroundColor:
              selectedCategory === "" ? "rgb(49, 130, 206)" : "rgb(43, 54, 80)",
          }}
          onClick={() => setSelectedCategory("")}
        >
          Semua Kategori
        </Button>
        {list_category_product.map((item: string, index: number) => (
          <Button
            color={primaryTextDarkColor}
            onClick={() => setSelectedCategory(item)}
            key={index}
            backgroundColor={
              selectedCategory === item
                ? "rgb(49, 130, 206)"
                : "rgb(43, 54, 80)"
            }
            _hover={{
              backgroundColor:
                selectedCategory === item
                  ? "rgb(49, 130, 206)"
                  : "rgb(43, 54, 80)",
            }}
          >
            {item}
          </Button>
        ))}
      </HStack>

      <HStack flexWrap={"wrap"} gap={"20px"} justifyContent={"center"}>
        {products.map((item: any, index: number) =>
          item.category.includes(selectedCategory) ? (
            <Stack
              key={index}
              width={{ base: "45%", sm: "170px", md: "220px" }}
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
          ) : null
        )}
      </HStack>
    </Stack>
  );
};

export default Products;
