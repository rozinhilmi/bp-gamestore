import { Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";

const StepsBecomeReseller = () => {
  return (
    <Stack
      padding={"30px"}
      bg={secondaryColor()}
      margin={"20px"}
      borderRadius={"12px"}
    >
      <Text
        as={"b"}
        fontSize={"3xl"}
        color={primaryTextColor()}
        textAlign={"center"}
      >
        Tahapan Menjadi Reseller
      </Text>
    </Stack>
  );
};

export default StepsBecomeReseller;
