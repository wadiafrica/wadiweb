import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { useState } from "react";
import { WadiButton } from "../../../../ReviewerComps/buttons/wadiButton";
import { GoBack } from "../../../../Routes/publishITComps/LeftContainer/back";
import { AccountInfoComps } from "../accountInfoComps";
import { AccountNavLink } from "../accountNavLink";
import { DeactivateAccountComps } from "../deactivateAccountComps";
import { DeactivateConfirmPassword } from "../deactivateConfirmPassword";
import { GoBackto } from "../goBackto";

export const DeleteAccount = (props: any) => {
  const [page, setPage] = useState(0);
  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box w="100%">
        {page === 0 ? <DeactiveFirstPage  setPage={setPage}/> : <DeactiveSecondPage/>}
      </Box>
    </Flex>
  );
};

const DeactiveFirstPage = (props:any) => {
  return (
    <>
      <Flex>
        <GoBackto name="Deactivate account" />
        <Spacer />
      </Flex>
      <Box mt="20px">
        <DeactivateAccountComps
          pic={""}
          name={"Toheeb Ojoulape"}
          profession={"Ass. Lecturer- Env Mgt"}
          onClick={() => props.setPage(1)}
        />
      </Box>
    </>
  );
};

const DeactiveSecondPage = (props:any) => {
  return (
    <>
      <Flex>
        <GoBackto name="Confirm your password" />
        <Spacer />
      </Flex>
      <Box mt="20px">
        <DeactivateConfirmPassword handleChange={props.handleChange}/>
      </Box>
    </>
  );
};
