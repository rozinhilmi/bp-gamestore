import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

const Services = (props: { services: any }) => {
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      margin={"20px"}
      borderRadius={"12px"}
      id="Services"
    >
      <Stack alignItems={"center"}>
        <Text
          as={"b"}
          fontSize={{ base: "2xl", lg: "3xl" }}
          color={primaryTextColor()}
          textAlign={"center"}
        >
          Layanan yang Kami Tawarkan
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={secondaryTextColor()}
        >
          Kami juga menyediakan berbagai macam layanan bagi anda dengan berbagai
          macam kebutuhan. Untuk saat ini tersedia layanan VocaGame untuk topup
          voucher dan layanan VocaPanel bagi anda yang ingin membuat website
          topup
        </Text>
      </Stack>
      <Stack gap={"80px"} my={"30px"}>
        {props.services.map((item: any, index: number) => (
          <HStack
            justifyContent={"space-between"}
            key={index}
            flexDirection={{
              base: "column-reverse",
              md: index % 2 !== 0 ? "row-reverse" : "row",
            }}
            gap={"30px"}
          >
            <Stack width={{ base: "100%", xl: "50%" }}>
              <Text
                color={primaryTextColor()}
                as={"b"}
                fontSize={{ base: "2xl", lg: "4xl" }}
                textAlign={{
                  base: "start",
                  md: index % 2 == 0 ? "end" : "start",
                }}
              >
                {item.title}
              </Text>
              <Text
                color={secondaryTextColor()}
                textAlign={{
                  base: "start",
                  md: index % 2 == 0 ? "end" : "start",
                }}
              >
                {item.description}
              </Text>
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
                width={{ base: "220px", md: "80%", xl: "50%" }}
                alignSelf={{
                  base: "center",
                  md: index % 2 == 0 ? "flex-start" : "flex-end",
                  lg: "center",
                }}
                src={`/assets/Products/${item.src}`}
                loading="lazy"
              />
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Services;
