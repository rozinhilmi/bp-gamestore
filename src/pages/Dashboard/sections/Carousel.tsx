import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { Link } from "react-router-dom";

const Carousel = (props: { carousel_content: any; admin_chat: any }) => {
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
      minHeight={{ base: "85vh", lg: "700px" }}
    >
      <Text
        zIndex={"2"}
        color={primaryTextColor()}
        as={"b"}
        fontSize={{ sm: "2xl", md: "3xl" }}
      >
        {props.carousel_content.title}
      </Text>
      <Text
        zIndex={"2"}
        width={{ base: "100%", lg: "60%" }}
        color={secondaryTextColor()}
      >
        {props.carousel_content.description}
      </Text>
      <HStack zIndex={"2"}>
        <Link to={"https://bpgamestore.com/auth/register"} target="_blank">
          <Button colorScheme="blue">Daftar Sekarang</Button>
        </Link>

        <Link
          to={`https://wa.me/${props.admin_chat.phone}?text=${props.admin_chat.chat}`}
          target="_blank"
        >
          <Button colorScheme="whiteAlpha">Konsultasi Gratis</Button>
        </Link>
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
        <Image
          src={`/assets/${props.carousel_content.gambar[0]}`}
          loading="lazy"
        />
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
        <Image
          src={`/assets/${props.carousel_content.gambar[1]}`}
          loading="lazy"
        />
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
        <Image
          src={`/assets/${props.carousel_content.gambar[2]}`}
          loading="lazy"
        />
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
        <Image
          src={`/assets/${props.carousel_content.gambar[3]}`}
          loading="lazy"
        />
      </Stack>
    </Stack>
  );
};

export default Carousel;
