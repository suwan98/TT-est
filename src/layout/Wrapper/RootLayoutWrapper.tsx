import {themeState} from "@/recoil/theme";
import {useRecoilValue} from "recoil";

interface WrapperProps {
  children: React.ReactNode;
}

function RootLayoutWrapper({children}: WrapperProps) {
  const theme = useRecoilValue(themeState);
  const lightTheme = "bg-slate-100 text-black";
  const blackTheme = "bg-black text-white";
  const isTheme = theme === "light" ? lightTheme : blackTheme;

  return (
    <>
      <div
        className={`${isTheme} h-screen flex flex-col items-center justify-center`}>
        {children}
      </div>
    </>
  );
}

export default RootLayoutWrapper;
