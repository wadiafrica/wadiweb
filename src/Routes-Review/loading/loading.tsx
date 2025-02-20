import { Center } from "@chakra-ui/react";
import { ColorRing } from "react-loader-spinner";

export const Loading = (props: { loading: boolean }) => {
  return (
    <Center className="flex items-center justify-center w-screen h-screen bg-white">
      {
        <ColorRing
          visible={props.loading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      }
    </Center>
  );
};
