import { Stack } from "@chakra-ui/react";
import Navbar from "./sections/Navbar";
import Carousel from "./sections/Carousel";
import { primaryDarkColor } from "../../utils/constant/theme";
import Products from "./sections/Products";
import Benefit from "./sections/Benefit";
import OurClients from "./sections/OurClients";
import AnotherService from "./sections/AnotherService";
import Footer from "./sections/Footer";

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
        <AnotherService />
        <Footer />
        {/* <StepsBecomeReseller /> */}
      </Stack>
    </Stack>
  );
};

export default index;
