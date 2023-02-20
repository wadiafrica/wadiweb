import { Box, Flex, Tab, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  Briefcase,
  CardPos,
  DocumentText,
  LogoutCurve,
  TimerStart,
} from "iconsax-react";
import { useState } from "react";
import { SideBarButton } from "../../../Comps/sidebar/button/sidebarButton";
import { ProjectDetails } from "../LeftContainer/projectDetails";
import { NavBoxes } from "./navBoxes";

const navItems = [
  {
    title: "Project details",
    subtitle: "Update the the form",
    icon: <Briefcase size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />,
  },
  {
    title: "Payment",
    subtitle: "Fill in payment fields",
    icon: <CardPos size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />,
  },
  {
    title: "Review-in-progress",
    subtitle: "Your project is being reviewed",
    icon: (
      <TimerStart size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />
    ),
  },
  {
    title: "Manuscript ready",
    subtitle: "Update the the form",
    icon: (
      <DocumentText size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />
    ),
  },
];
export const RightContainer = (props: any) => {
  return (
    <Flex
      flexWrap={"wrap"}
      h="full"
      flexDirection={"column"}
      w="100%"
      bg={"white"}
      borderRadius="md"
    >
      {/* {navItems.map((item, index) => {
        return (
          <NavBoxes
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            isActive={index === 0 ? true : false}
          />
        );
      })} */}
      <Tabs
        index={props.tabIndex}
        onChange={props.handleTabsChange}
        w={"100%"}
        isLazy
      >
        <Box>
          {navItems.map((item, index) => {
            return (
              <Tab mt='10px' border={"0px"} textAlign="left">
                <NavBoxes
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
                
                />
              </Tab>
            );
          })}
         
        </Box>
      </Tabs>
    </Flex>
  );
};
