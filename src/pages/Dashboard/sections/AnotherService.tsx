import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

const AnotherService = () => {
  const services: any = [
    {
      title: "BP Gamestore",
      description:
        "BP Gamestore menyediakan layanan Top up game dan Reseller Voucher Game termurah dan terpercaya di Indonesia. Topup lebih dari 100 game online terkemuka dunia di VocaGame mudah aman tanpa registrasi, pembelian instan langsung masuk dalam hitungan detik.",
      src: "Mobile Legend.webp",
    },
    {
      title: "Website Gratis",
      description:
        "Website Gratis adalah solusi bagi anda yang ingin membuat website topup anda sendiri dan mengelola bisnis anda sendiri. Dengan VocaPanel anda dapat meraih keuntungan lebih besar serta membuat komunitas anda sendiri.",
      src: "Pubg Mobile.webp",
    },
  ];
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      margin={"20px"}
      borderRadius={"12px"}
      id="AnotherServices"
    >
      <Stack alignItems={"center"}>
        <Text
          as={"b"}
          fontSize={{ base: "2xl", lg: "3xl" }}
          color={primaryTextDarkColor}
          textAlign={"center"}
        >
          Layanan lain yang kami tawarkan
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={secondaryTextColor}
        >
          Kami juga menyediakan berbagai macam layanan bagi anda dengan berbagai
          macam kebutuhan. Untuk saat ini tersedia layanan VocaGame untuk topup
          voucher dan layanan VocaPanel bagi anda yang ingin membuat website
          topup
        </Text>
      </Stack>
      <Stack gap={"30px"} my={"30px"}>
        {services.map((item: any, index: number) => (
          <HStack
            justifyContent={"space-between"}
            key={index}
            flexDirection={{
              base: "column-reverse",
              xl: index % 2 !== 0 ? "row-reverse" : "row",
            }}
            gap={"30px"}
          >
            <Stack width={{ base: "100%", xl: "50%" }}>
              <Text
                color={primaryTextDarkColor}
                as={"b"}
                fontSize={{ base: "2xl", lg: "4xl" }}
              >
                {item.title}
              </Text>
              <Text color={secondaryTextColor}>{item.description}</Text>
            </Stack>

            <Stack width={{ base: "100%", xl: "50%" }}>
              <Image
                zIndex={"1"}
                padding={"10px"}
                backgroundColor={"whiteAlpha.300"}
                borderRadius={"5px"}
                bottom={"2cm"}
                left={"2cm"}
                objectFit={"contain"}
                width={"220px"}
                alignSelf={"center"}
                src={`/assets/Products/${item.src}`}
              />
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default AnotherService;
