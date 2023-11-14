import ToggleThemeButton from "@/components/common/ToggleThemeButton";
import {Outlet} from "react-router-dom";
import RootLayoutWrapper from "./Wrapper/RootLayoutWrapper";

function RootLayout() {
  return (
    <>
      <RootLayoutWrapper>
        <ToggleThemeButton />
        <Outlet />
      </RootLayoutWrapper>
    </>
  );
}

export default RootLayout;
