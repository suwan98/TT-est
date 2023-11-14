import {themeState} from "@/recoil/theme";
import {useRecoilState} from "recoil";

function ToggleThemeButton() {
  const [theme, setTheme] = useRecoilState(themeState);
  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button onClick={handleToggleTheme}>토글 모드</button>
    </>
  );
}

export default ToggleThemeButton;
