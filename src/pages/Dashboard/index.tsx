import { Image, Stack } from "@chakra-ui/react";
import Navbar from "./sections/Navbar";
import Carousel from "./sections/Carousel";
import { primaryDarkColor } from "../../utils/constant/theme";
import Products from "./sections/Products";
import Benefit from "./sections/Benefit";
import OurClients from "./sections/OurClients";
import Footer from "./sections/Footer";
import OtherService from "./sections/OtherServices";
import { Link } from "react-router-dom";
import Services from "./sections/Services";
const index = () => {
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={primaryDarkColor}
    >
      <Stack
        width={"100%"}
        maxWidth={"1440px"}
        backgroundColor={primaryDarkColor}
        position={"relative"}
        // minHeight={"80vh"}
      >
        <Navbar />
        <Carousel />
        <Products />
        <Benefit />
        <OurClients />
        <Services />
        <OtherService />
        <Footer />

        <Link
          to={
            "https://wa.me/62895335412735?text=Halo%20kak%20saya%20mau%20join%20reseller%20BP"
          }
          target="_blank"
        >
          <Image
            position={"fixed"}
            bottom={"20px"}
            right={"20px"}
            cursor={"pointer"}
            src="/assets/whatsapp-icon.png"
            width={"60px"}
            height={"60px"}
          />
        </Link>

        {/* <StepsBecomeReseller /> */}
      </Stack>
    </Stack>
  );
};

export default index;
