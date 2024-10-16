
import { IconButton } from "@chakra-ui/react";
import { Import } from "iconsax-react";
import TrashIcon from "../../dashboardComps/icons/delete";
import PenIcon from "../../dashboardComps/icons/pen";


export const EditButton = (props: any) => {
  return <IconButton bg='rgba(242, 249, 253, 1)' ml='10px' aria-label="Edit" icon={<PenIcon />} />;
};
export const DeleteButton = (props: any) => {
  return <IconButton bg='rgba(254, 228, 226, 1)' ml='10px' aria-label="Edit" icon={<TrashIcon />} />;
};
export const ImportButton = (props: any) => {
  return <IconButton bg='rgba(209, 250, 223, 1)' ml='10px' aria-label="Edit" icon={<Import color="rgba(18, 183, 106, 1)" />} />;
};
