import { Button } from "@chakra-ui/react";

export const WadiButton = (props: any) => {
  return (
    <Button
      fontSize="sm"
      variant="brand"
      fontWeight="500"
      w="100%"
      h="50"
      mb="24px"
      bg={"rgba(43, 95, 208, 1)"}
      color="white"
      fontFamily={""}
      _hover={{ bg: "black" }}
      _active={{ bg: "black" }}
      _focus={{ bg: "black" }}
    >
      {props.text}
    </Button>
  );
};
