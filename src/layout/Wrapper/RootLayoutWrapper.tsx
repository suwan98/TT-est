import {themeState} from "@/recoil/theme";
import {useRecoilValue} from "recoil";

interface WrapperProps {
  children: React.ReactNode;
}

function RootLayoutWrapper({children}: WrapperProps) {
  const theme = useRecoilValue(themeState);
  return (
    <>
      <div className={`${theme}`}>{children}</div>
    </>
  );
}

export default RootLayoutWrapper;
