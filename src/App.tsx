import * as React from "react";
import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";

import { Navigate, Route, Routes } from "react-router-dom";
import { Loading } from "./Routes-Review/loading/loading";
import "animate.css";

const ReviewerDashBoard = lazy(() => import("./ReviewerDashboard/Dashboard"));
const DashBoard = lazy(() => import("./Dashboard/Dashboard"));
const ReferralCode = lazy(() => import("./Marketing/ReferralCode"));
const SignIn = lazy(() =>
  import("./OnBoarding/SignIn/SignIn").then((module) => ({
    default: module.SignIn,
  }))
);
const FP = lazy(() =>
  import("./OnBoarding/ForgotPassword/FP").then((module) => ({
    default: module.FP,
  }))
);
const SignUP = lazy(() =>
  import("./OnBoarding/SignUp/SignUp").then((module) => ({
    default: module.SignUP,
  }))
);
const VerifyEmail = lazy(() =>
  import("./OnBoarding/VerifyEmail/VerifyEmail").then((module) => ({
    default: module.VerifyEmail,
  }))
);
const SNP = lazy(() =>
  import("./OnBoarding/SetNewPassword/SNP").then((module) => ({
    default: module.SNP,
  }))
);
const Profile = lazy(() =>
  import("./ResearchOnboarding/Profile/Profile").then((module) => ({
    default: module.Profile,
  }))
);

const AdminSignUp = lazy(() =>
  import("./Routes-Review/AdminSignin/Signup/Signup").then((module) => ({
    default: module.AdminSignUp,
  }))
);
const AdminSignIn = lazy(() =>
  import("./Routes-Review/AdminSignin/SignIn/SignIn").then((module) => ({
    default: module.AdminSignIn,
  }))
);
const Background = lazy(() =>
  import("./ResearchOnboarding/Background/Background").then((module) => ({
    default: module.Background,
  }))
);
const YourStory = lazy(() =>
  import("./ResearchOnboarding/YourStory/YourStory").then((module) => ({
    default: module.YourStory,
  }))
);
const Achieve = lazy(() =>
  import("./ResearchOnboarding/Achieve/Achieve").then((module) => ({
    default: module.Achieve,
  }))
);
const FOF = lazy(() =>
  import("./Routes/404/404").then((module) => ({ default: module.FOF }))
);

export const App = () => (
  <div>
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading loading />}>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/forgot-password" element={<FP />} />
          <Route path="/register" element={<SignUP />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/new-password" element={<SNP />} />
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/background" element={<Background />} />
          <Route path="/onboarding/story" element={<YourStory />} />
          <Route path="/onboarding/achieve" element={<Achieve />} />
          <Route path="/referral-code" element={<ReferralCode />} />
          <Route
            path="/review/:reviewRoute"
            element={<ReviewerDashBoard loggedIn={true} />}
          />

          <Route path="/review/signup" element={<AdminSignUp />} />

          <Route path="/review/login" element={<AdminSignIn />} />
          <Route
            path="/review/settings/:settingRoute"
            element={<ReviewerDashBoard loggedIn={true} />}
          />
          <Route
            path="/dashboard/settings/:settingRoute"
            element={<DashBoard loggedIn={true} />}
          />

          <Route
            path="/dashboard/:route"
            element={<DashBoard loggedIn={true} />}
          />
          <Route
            path="/review"
            element={<Navigate to="/review/home" replace />}
          />

          <Route
            path="/dashboard/publish/:subroute"
            element={<DashBoard loggedIn={true} />}
          />

          <Route path="/404" element={<FOF />} />
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          <Route
            path="/dashboard"
            element={<Navigate to="/dashboard/home" replace />}
          />

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </ChakraProvider>
  </div>
);
