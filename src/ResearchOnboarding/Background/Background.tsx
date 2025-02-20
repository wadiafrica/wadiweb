import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const Background = (props: any) => {
  return (
    <>
    <LogoComp />
    <Center className="flex items-center justify-center">
      <OnBoardingContainer
        heading="Share your professional experience"
        page="background"
      />
    </Center></>
  );
};
