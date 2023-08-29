import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryDarkColor,
} from "../../../utils/constant/theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { BsFillSunFill } from "react-icons/bs";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <HStack
        height={"1.7cm"}
        paddingX={{ base: "10px", lg: "40px" }}
        width={"100%"}
        maxW={"1440px"}
        backgroundColor={secondaryDarkColor}
        justify={"space-between"}
        className="navbar"
        position={"fixed"}
        zIndex={"10"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Image src="/assets/Logo.png" width={"40px"} objectFit={"contain"} />

        <HStack gap={"30px"} display={{ base: "none", lg: "flex" }}>
          <HStack gap={"30px"}>
            <a href="#Carousel">
              <Text
                color={primaryTextDarkColor}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Beranda
              </Text>
            </a>

            <a href="#Products">
              <Text
                color={primaryTextDarkColor}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Produk
              </Text>
            </a>

            <a href="#Benefit">
              <Text
                color={primaryTextDarkColor}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Keuntungan
              </Text>
            </a>
            <a href="#OurClients">
              <Text
                color={primaryTextDarkColor}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Client Kami
              </Text>
            </a>
            <a href="#AnotherServices">
              <Text
                color={primaryTextDarkColor}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Layanan Kami
              </Text>
            </a>
          </HStack>

          <HStack>
            <Link to={"https://bpgamestore.com/auth/login"} target="_blank">
              <Button colorScheme="blue">Masuk</Button>
            </Link>
            <Link to={"https://bpgamestore.com/auth/register"} target="_blank">
              <Button colorScheme="whiteAlpha">Daftar Sekarang</Button>
            </Link>
            {/* <Button colorScheme="blackAlpha">
              <BsFillSunFill />
            </Button> */}
          </HStack>
        </HStack>

        <Button
          colorScheme="whiteAlpha"
          display={{ base: "flex", lg: "none" }}
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <GiHamburgerMenu />
        </Button>
      </HStack>

      <Stack
        transform={!showSidebar ? "translateX(100%)" : "translateX(0%)"}
        transition="all 0.5s"
        display={{ base: "flex", lg: "none" }}
        paddingX={{ base: "10px", lg: "40px" }}
        paddingY={"20px"}
        width={"100%"}
        height={"100vh"}
        maxW={"1440px"}
        backgroundColor={secondaryDarkColor}
        position={"fixed"}
        zIndex={"11"}
      >
        <HStack justifyContent={"space-between"}>
          <Image src="/assets/Logo.png" width={"40px"} objectFit={"contain"} />
          <Button
            colorScheme="whiteAlpha"
            display={{ base: "flex", lg: "none" }}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <IoMdClose />
          </Button>
        </HStack>

        <Stack gap={"10px"} my={"30px"}>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Carousel";
            }}
          >
            Beranda
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Products";
            }}
          >
            Products
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Benefit";
            }}
          >
            Keuntungan
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#OurClients";
            }}
          >
            Client Kami
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#AnotherServices";
            }}
          >
            Layanan Kami
          </Button>
          <HStack>
            <Link
              style={{ width: "50%" }}
              to={"https://bpgamestore.com/auth/login"}
              target="_blank"
            >
              <Button width={"100%"} colorScheme="blue">
                Masuk
              </Button>
            </Link>
            <Link
              style={{ width: "50%" }}
              to={"https://bpgamestore.com/auth/register"}
              target="_blank"
            >
              <Button width={"100%"} colorScheme="whiteAlpha">
                Daftar Sekarang
              </Button>
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
