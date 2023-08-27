import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { primaryTextColor } from "../../../utils/constant/theme";

const Carousel = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"90vh"}
      maxHeight={"700px"}
      textAlign={"center"}
      padding={"40px"}
      gap={"20px"}
      position={"relative"}
      id="Carousel"
    >
      <Text zIndex={"2"} color={primaryTextColor} as={"b"} fontSize={"3xl"}>
        Jadi Reseller Voucher Game Bersama BP Game Store
      </Text>
      <Text
        zIndex={"2"}
        width={{ base: "100%", lg: "60%" }}
        color={primaryTextColor}
      >
        Bisnis VocaGame berkomitmen untuk menjadi Supplier Top Up Instant Game &
        Voucher termurah, terpercaya, aman, legal dan melayani 24 jam dengan
        metode pembayaran terlengkap.
      </Text>
      <HStack zIndex={"2"}>
        <Button colorScheme="blue">Masuk</Button>
        <Button colorScheme="whiteAlpha">Daftar Sekarang</Button>
      </HStack>
      <Stack
        // display={{ base: "none", xl: "block" }}
        zIndex={"1"}
        position={"absolute"}
        padding={"10px"}
        backgroundColor={"whiteAlpha.300"}
        borderRadius={"5px"}
        top={"2cm"}
        left={"2cm"}
        width={{ base: "90px", lg: "170px" }}
        objectFit={"contain"}
        transform={"rotate(-5deg)"}
      >
        <Image src={`/assets/Products/Mobile Legend.webp`} />
      </Stack>

      <Stack
        // display={{ base: "none", xl: "block" }}
        zIndex={"1"}
        position={"absolute"}
        padding={"10px"}
        backgroundColor={"whiteAlpha.300"}
        borderRadius={"5px"}
        bottom={"2cm"}
        left={"2cm"}
        width={{ base: "90px", lg: "170px" }}
        objectFit={"contain"}
        transform={"rotate(5deg)"}
      >
        <Image src={`/assets/Products/Pubg Mobile.webp`} />
      </Stack>

      <Stack
        // display={{ base: "none", xl: "block" }}
        zIndex={"1"}
        position={"absolute"}
        padding={"10px"}
        backgroundColor={"whiteAlpha.300"}
        borderRadius={"5px"}
        bottom={"2cm"}
        right={"2cm"}
        width={{ base: "90px", lg: "170px" }}
        objectFit={"contain"}
        transform={"rotate(-5deg)"}
      >
        <Image src={`/assets/Products/Free Fire.webp`} />
      </Stack>

      <Stack
        // display={{ base: "none", xl: "block" }}
        zIndex={"1"}
        position={"absolute"}
        padding={"10px"}
        backgroundColor={"whiteAlpha.300"}
        borderRadius={"5px"}
        top={"2cm"}
        right={"2cm"}
        width={{ base: "90px", lg: "170px" }}
        objectFit={"contain"}
        transform={"rotate(5deg)"}
      >
        <Image src={`/assets/Products/Fifa Mobile.webp`} />
      </Stack>
    </Stack>
  );
};

export default Carousel;
