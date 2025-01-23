import { useState, useEffect } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState("light");

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
        <IoMoon className="text-white text-3xl lg:text-5xl" />
      ) : (
        <IoSunnyOutline className="text-white text-3xl lg:text-5xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
