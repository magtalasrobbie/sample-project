import { useState, useEffect } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoon className="text-white text-3xl lg:text-5xl transition ease-in-out" />
      ) : (
        <IoSunnyOutline className="text-white text-3xl lg:text-5xl transition ease-in-out" />
      )}
    </button>
  );
};

export default ThemeToggle;
