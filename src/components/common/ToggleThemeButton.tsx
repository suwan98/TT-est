import {themeState} from "@/recoil/theme";
import {useRecoilState} from "recoil";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import {useEffect} from "react";
import {APPTHEME} from "@/constants/constants";

function ToggleThemeButton() {
  const [theme, setTheme] = useRecoilState(themeState);
  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(APPTHEME, newTheme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem(APPTHEME);
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    }
  }, [setTheme]);

  return (
    <>
      <button
        onClick={handleToggleTheme}
        className={`absolute top-0 right-0 m-8 hover:scale-150`}>
        {theme === "light" ? (
          <BsFillSunFill size="24px" color="orange" />
        ) : (
          <BsFillMoonFill size="24px" />
        )}
      </button>
    </>
  );
}

export default ToggleThemeButton;
