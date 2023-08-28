import { Stack, Text } from "@chakra-ui/react";
import {
  primaryTextDarkColor,
  secondaryDarkColor,
} from "../../../utils/constant/theme";

const StepsBecomeReseller = () => {
  return (
    <Stack
      padding={"30px"}
      bg={secondaryDarkColor}
      margin={"20px"}
      borderRadius={"12px"}
    >
      <Text
        as={"b"}
        fontSize={"3xl"}
        color={primaryTextDarkColor}
        textAlign={"center"}
      >
        Tahapan Menjadi Reseller
      </Text>
    </Stack>
  );
};

export default StepsBecomeReseller;
