import {
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  primaryDarkColor,
  primaryTextDarkColor,
  secondaryDarkColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { convertToBillNumber } from "../../../utils/helper/helper";

const Products = (props: { list_category_product: any; products: any }) => {
  const [selectedCategory, setSelectedCategory]: any = useState("");
  const [selectedProduct, setSelectedProduct]: any = useState(null);
  const katalog = [
    {
      title: "60 + 6 Bonds",
      items: [
        {
          type: "Gold",
          price: 13200,
        },
        {
          type: "Crown",
          price: 15200,
        },
        {
          type: "Platinum",
          price: 17200,
        },
      ],
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        {props.list_category_product.map((item: string, index: number) => (
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
        {props.products.map((item: any, index: number) =>
          item.category.includes(selectedCategory) ? (
            <Stack
              onClick={() => {
                setSelectedProduct(item);
                onOpen();
              }}
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

      {selectedProduct ? (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setSelectedProduct(null);
            onClose();
          }}
          size={"full"}
        >
          <ModalOverlay />
          <ModalContent
            backgroundColor={primaryDarkColor}
            color={primaryTextDarkColor}
            borderRadius={"12px"}
            position={"relative"}
          >
            <ModalBody>
              <Button
                size={{ base: "xs", sm: "sm" }}
                colorScheme="whiteAlpha"
                position={"absolute"}
                right={"5"}
                onClick={() => {
                  setSelectedProduct(null);
                  onClose();
                }}
              >
                <IoMdClose />
              </Button>
              <Stack gap={"20px"} paddingY={"10px"}>
                <Stack textAlign="center" lineHeight={"5"}>
                  <Text fontSize={"20px"} as="b">
                    Katalog Harga Produk - {selectedProduct.title}
                  </Text>
                  <Text color={secondaryTextColor}>
                    Nikmati harga lebih murah dengan menjadi member crown!
                  </Text>
                </Stack>

                <HStack
                  flexWrap={"wrap"}
                  justifyContent={"center"}
                  color={primaryTextDarkColor}
                  lineHeight={"3"}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
                    <HStack
                      backgroundColor={"rgb(43, 54, 80)"}
                      padding={"20px"}
                      borderRadius={"12px"}
                      width={{ base: "100%", md: "49%" }}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      key={item}
                    >
                      <Text>{katalog[0].title}</Text>
                      <Stack fontSize={"14px"}>
                        {katalog[0].items.map((item: any, index: number) => (
                          <HStack justifyContent={"flex-end"} key={index}>
                            <Text>{item.type}</Text>
                            <Text>{convertToBillNumber(item.price)}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </HStack>
                  ))}
                </HStack>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
    </Stack>
  );
};

export default Products;
