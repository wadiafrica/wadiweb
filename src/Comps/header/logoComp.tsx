import { Flex } from "@chakra-ui/react";
import logo from "./logo.webp";
import { useNavigate } from 'react-router';

export const LogoComp = () => {
  const history = useNavigate()
  return (
    <Flex justify={"center"}>
      <img onClick={()=>history("/")} src={logo} width="110px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
};
