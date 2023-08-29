import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { benefit } from "../../../../public/database.json";
const Benefit = () => {
  return (
    <Stack
      padding={{ base: "0px", lg: "30px" }}
      paddingY={"30px"}
      margin={"20px"}
      borderRadius={"12px"}
      id="Benefit"
      scrollBehavior={"smooth"}
    >
      <Text
        as={"b"}
        fontSize={{ base: "2xl", lg: "3xl" }}
        color={primaryTextDarkColor}
        textAlign={"center"}
      >
        Mengapa Memilih Kami
      </Text>

      <Stack gap={"50px"} my={"30px"}>
        {benefit.map((item: any, index: number) => (
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
                color={primaryTextDarkColor}
                as={"b"}
                fontSize={{ base: "2xl", xl: "4xl" }}
                textAlign={index % 2 == 0 ? "end" : "start"}
              >
                {item.title}
              </Text>
              <Text
                color={secondaryTextColor}
                textAlign={index % 2 == 0 ? "end" : "start"}
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
                width={"220px"}
                alignSelf={"center"}
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

export default Benefit;
