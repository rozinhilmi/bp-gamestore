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
import axios from "axios";
import { useEffect, useState } from "react";
const index = () => {
  const [data, setData]: any = useState();
  const getData = async () => {
    await axios.get(`database.json`).then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={primaryDarkColor}
    >
      {data ? (
        <Stack
          width={"100%"}
          maxWidth={"1440px"}
          backgroundColor={primaryDarkColor}
          position={"relative"}
          // minHeight={"80vh"}
        >
          <Navbar />
          <Carousel carousel_content={data.carousel_content} />
          <Products
            list_category_product={data.list_category_product}
            products={data.products}
          />
          <Benefit benefit={data.benefit} />
          <OurClients clients={data.clients} />
          <Services services={data.services} />
          <OtherService other_services={data.other_services} />
          <Footer />

          <Link
            to={`https://wa.me/${data.admin_chat.phone}?text=${data.admin_chat.chat}`}
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
      ) : null}
    </Stack>
  );
};

export default index;
