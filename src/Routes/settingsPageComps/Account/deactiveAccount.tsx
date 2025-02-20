import { Box, Flex, Spacer,} from "@chakra-ui/react";

import { useState } from "react";

import { DeactivateAccountComps } from "../deactivateAccountComps";
import { DeactivateConfirmPassword } from "../deactivateConfirmPassword";
import { GoBackto } from "../goBackto";

export const DeleteAccount = (props: any) => {
  const [page, setPage] = useState(0);
  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box w="100%">
        {page === 0 ? <DeactiveFirstPage userData={props.userData}  setPage={setPage}/> : <DeactiveSecondPage/>}
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
          pic={props.userData.photoURL}
          name={props.userData.firstName+" "+props.userData.lastName}
          profession={props.userData.title}
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
