import ToggleThemeButton from "@/components/common/ToggleThemeButton";
import {Outlet} from "react-router-dom";
import RootLayoutWrapper from "./Wrapper/RootLayoutWrapper";

function RootLayout() {
  return (
    <>
      <RootLayoutWrapper>
        <ToggleThemeButton />
        <main>
          <Outlet />
        </main>
      </RootLayoutWrapper>
    </>
  );
}

export default RootLayout;
