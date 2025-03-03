import { SideBarButton } from "./button/sidebarButton";

import {
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Routes } from "./routes";
import { Link, useParams } from "react-router-dom";
import { NameAndPosition } from "./topbar/rightSide/rightSide";
import { TopBarTag } from "./topbar/rightSide/topBarTag";
import { useState } from "react";
import { CreateNewButton } from "./button/createNewButton";
import { LogoutCurve, Setting2 } from "iconsax-react";
import { SubButton } from "./button/subButton";
import { signOut,getAuth } from "firebase/auth";

export const SideBarMobile = (props: {
  isOpen: boolean;
  onClose: () => void;
  profession: string;
  name: string;
  position: string;
}) => {
  const params = useParams() as { route: string };
  const { route } = params;

  const routeToIndex = (route: string) => {
    switch (route) {
      case "undefined":
        return 0;
      case "publish":
        return 1;
      case "academy":
        return 2;
      case "sample":
        return 3;
      case "forum":
        return 4;
      default:
        return 0;
    }
  };
  const [active, setActive] = useState(routeToIndex(route));
  const { isOpen, onToggle } = useDisclosure();

  const logOut = () =>{
    const auth = getAuth()
    signOut(auth).then(()=>{
      localStorage.removeItem("wadiKey")
      window.location.href="/login"
    })
  }

  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="xs"
    >
      <DrawerContent bg={"white"}>
        <div className="fixed top-0 right-0 h-screen w-[300px] flex flex-col bg-[#ffffff] text-[#475467]">
          <Flex flexDirection="column" className="mb-12 ml-6 mt-9">
            <NameAndPosition name={props.name} position={props.position} />
            <TopBarTag
              title={props.profession}
            
            />
          </Flex>
          <CreateNewButton />
          {Routes.map((route, index) => {
            return (
              <div key={index}>
                <Link to={route.routes}>
                  <SideBarButton
                    name={route.title}
                    icon={route.icon}
                    key={index}
                    onClick={() => {
                      if (index !== 1) {
                        setActive(index);
                        props.onClose();
                      } else {
                        onToggle();
                      }
                    }}
                    isActive={active === index}
                  />
                </Link>
                <Box>
                  {route.subRoutes &&
                    route.subRoutes.map((subRoute, index) => {
                      return (
                        <Collapse key={index} in={isOpen} animateOpacity>
                          <Link to={subRoute.routes}>
                            <SubButton
                              name={subRoute.title}
                              icon={subRoute.icon}
                              key={index + 10}
                              onClick={() => {
                                setActive(index + 10);
                                props.onClose();
                              }}
                              isActive={active === index + 10}
                            />
                          </Link>
                        </Collapse>
                      );
                    })}
                </Box>
              </div>
            );
          })}
          <SideBarButton
            name="Settings"
            icon={
              <Setting2
                size={"20"}
                color="rgba(41, 45, 50, 1)"
                variant="TwoTone"
              />
            }
          />
          <SideBarButton
            name="Log out"
            onClick={logOut}
            icon={
              <LogoutCurve
                size="20"
                color="rgba(41, 45, 50, 1)"
                variant="TwoTone"
              />
            }
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
