import {
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { convertToBillNumber } from "../../../utils/helper/helper";

const Products = (props: {
  list_category_product: any;
  products: any;
  catalog_product: any;
}) => {
  const [selectedCategory, setSelectedCategory]: any = useState("");
  const [selectedProduct, setSelectedProduct]: any = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="Products"
      gap={"30px"}
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "3xl" }}
        color={primaryTextColor()}
        textAlign={"center"}
      >
        Daftar Produk yang Tersedia
      </Text>

      <HStack flexWrap={"wrap"} justifyContent={"center"}>
        <Button
          color={"white"}
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
            color={"white"}
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
                setSelectedProduct(
                  props.catalog_product.find((catalog: any) => {
                    return catalog.name_of_game == item.title;
                  })
                );
                onOpen();
              }}
              key={index}
              width={{ base: "45%", sm: "170px", md: "220px" }}
              objectFit={"contain"}
              cursor={"pointer"}
              transition={"0.5s"}
              _hover={{ transform: "translateY(-10px)" }}
            >
              <Image src={`/assets/${item.src}`} loading="lazy" />
              <Text color={primaryTextColor()} as={"b"}>
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
          // size={"full"}
          size={{ base: "full", md: "6xl" }}
        >
          <ModalOverlay />
          <ModalContent
            backgroundColor={primaryColor()}
            color={primaryTextColor()}
            borderRadius={"12px"}
            position={"relative"}
          >
            <ModalBody>
              <Button
                size="sm"
                colorScheme="whiteAlpha"
                variant={"outline"}
                position={"absolute"}
                right={"5"}
                onClick={() => {
                  setSelectedProduct(null);
                  onClose();
                }}
              >
                <IoMdClose />
              </Button>
              <Stack
                gap={"20px"}
                paddingY={"10px"}
                marginTop={{ base: "30px", md: "0px" }}
              >
                <Stack textAlign="center" lineHeight={"5"}>
                  <Text fontSize={"20px"} as="b">
                    Katalog Harga Produk - {selectedProduct.name_of_game}
                  </Text>
                  <Text color={secondaryTextColor()}>
                    Nikmati harga lebih murah dengan menjadi member crown!
                  </Text>
                </Stack>

                <HStack
                  flexWrap={"wrap"}
                  alignItems={"flex-start"}
                  color={primaryTextColor()}
                  lineHeight={"3"}
                >
                  {selectedProduct.data.map((item: any, index: number) => (
                    <Stack
                      backgroundColor={secondaryColor()}
                      padding={"20px"}
                      borderRadius={"12px"}
                      width={{ base: "100%", md: "49%" }}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      key={index}
                      gap={"30px"}
                    >
                      <Text as={"b"} color={primaryTextColor()}>
                        {item.title}
                      </Text>
                      <Stack fontSize={"14px"} width={"100%"}>
                        {item.items.map((item: any, index: number) => (
                          <HStack
                            justifyContent={"space-between"}
                            key={index}
                            flexWrap={"wrap"}
                          >
                            <Text>{item.type}</Text>
                            <Text>{convertToBillNumber(item.price)}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </Stack>
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
