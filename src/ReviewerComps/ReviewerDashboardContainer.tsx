import { Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar } from "../Routes-Review/calendar-home/Calendar";
import { ReviewHome } from "../Routes-Review/review-home/DashBoardHome";


import { TopBar } from "./sidebar/topbar/topbar";

const topBarData = {
  profession: "Reviewer",
  name: "Isaac Ojo",
  profilePic:
    "https://lh3.googleusercontent.com/-N43TPVUqQpk/AAAAAAAAAAI/AAAAAAAABK8/ONS86r57Wnk/photo.jpg?sz=256",
  hasNotification: true,
  notificationCount: 5,
  position: "Frontend Developer",
};

export const ReviewerDashBoardContainer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setsearch] = useState("");

  const handleSearchChange = (value: string) => {
    setsearch(value);
  };

  const params = useParams() as { reviewRoute: string; subroute: string };
  const { reviewRoute, subroute } = params;
  console.log(subroute);
  return (
    <Box
      float="right"
      minHeight="100vh"
      height="100%"
      overflow="auto"
      position="relative"
      maxHeight="100%"
      transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
      transitionDuration=".2s, .2s, .35s"
      transitionProperty="top, bottom, width"
      transitionTimingFunction="linear, linear, ease"
    >
      <TopBar
        {...topBarData}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleSearchChange={handleSearchChange}
      />
      <Box
        ml={!isMobile ? "10px" : "0px"}
        mt="80px"
        mr={!isMobile ? "10px" : "0px"}
      ></Box>
      {reviewRoute === "home" && <ReviewHome />}
      {reviewRoute === "calendar" && <Calendar />}
    </Box>
  );
};
