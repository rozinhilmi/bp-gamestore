import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { Link } from "react-router-dom";

const Carousel = (props: { carousel_content: any }) => {
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
        <Image src={`/assets/Carousel/${props.carousel_content.gambar[0]}`} />
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
        <Image src={`/assets/Carousel/${props.carousel_content.gambar[1]}`} />
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
        <Image src={`/assets/Carousel/${props.carousel_content.gambar[2]}`} />
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
        <Image src={`/assets/Carousel/${props.carousel_content.gambar[3]}`} />
      </Stack>
    </Stack>
  );
};

export default Carousel;
