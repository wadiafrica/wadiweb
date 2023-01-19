import { Box, Button, Center, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

export const SideBarButton = (props: any) => {
  const [Blue, setBlue] = useState("none");

  const handleClick = (e: any) => {};

  return (
    // <Button
    //   bg=""
    //   _hover={{ bg: "rgb(11, 26, 60)" }}
    //   borderRadius="0px"
    //   variant="solid"
    //   fontWeight={"hairline"}
    //   textAlign='left'
    //   mb="10px"
    // >
    //   <p className="text-left">{props.name}</p>
    // </Button>

    <Button
      width="100%"
      justifyContent="flex-start"
      ml={"10px"}
      onMouseEnter={() => {
        setBlue("block");
      }}
      onMouseLeave={() => {
        setBlue("none");
      }}
      w="100%"
      pt='10px'
      pb='10px'
      mb={'20px'}
      background={props.isActive ? "rgba(248, 248, 248, 1)" : ""}
      borderRadius="6px"
      className="cursor-pointer"
      _hover={{
        bg: "rgba(248, 248, 248, 1)",
      }}
    >
      <Flex>
        <Box height="fit-content" paddingRight="2">
          {props.icon}
        </Box>
        <Box w="" height="fit-content">
          {props.name}
        </Box>
        <Box
          position={"absolute"}
          right={0}
          _hover={{ display: "block" }}
          mr="10px"
        >
          <Center
            display={Blue}
            bg="rgba(43, 95, 208, 1)"
            borderRadius={"10px 0px 0px 10px"}
            w="8px"
            height="20px"
          ></Center>
        </Box>
      </Flex>
    </Button>
  );
};
