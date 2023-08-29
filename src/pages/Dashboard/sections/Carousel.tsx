import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { Link } from "react-router-dom";

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
      <Text
        zIndex={"2"}
        color={primaryTextDarkColor}
        as={"b"}
        fontSize={{ sm: "2xl", md: "3xl" }}
      >
        Jadi Reseller Voucher Game Bersama BP Game Store
      </Text>
      <Text
        zIndex={"2"}
        width={{ base: "100%", lg: "60%" }}
        color={secondaryTextColor}
      >
        Bisnis VocaGame berkomitmen untuk menjadi Supplier Top Up Instant Game &
        Voucher termurah, terpercaya, aman, legal dan melayani 24 jam dengan
        metode pembayaran terlengkap.
      </Text>
      <HStack zIndex={"2"}>
        <Link to={"https://bpgamestore.com/auth/register"}>
          <Button colorScheme="blue">Daftar Sekarang</Button>
        </Link>

        <Button colorScheme="whiteAlpha">Konsultasi Gratis</Button>
      </HStack>
      <Stack
        // display={{ base: "none", xl: "block" }}
        zIndex={"1"}
        position={"absolute"}
        padding={"10px"}
        backgroundColor={"whiteAlpha.300"}
        borderRadius={"5px"}
        top={{ base: "2cm", lg: "2cm" }}
        left={{ base: "10px", lg: "2cm" }}
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
        bottom={{ base: "10px", lg: "2cm" }}
        left={{ base: "10px", lg: "2cm" }}
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
        bottom={{ base: "10px", lg: "2cm" }}
        right={{ base: "10px", lg: "2cm" }}
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
        top={{ base: "2cm", lg: "2cm" }}
        right={{ base: "10px", lg: "2cm" }}
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
