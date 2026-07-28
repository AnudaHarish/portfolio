import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../libs/utils";

export function DarkModeBtn(){
  const [isDarkMode, setIsDarMode] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === 'dark'){
      setIsDarMode(true);
      document.documentElement.classList.add("dark");
    }else{
      setIsDarMode(false);
      document.documentElement.classList.remove("dark");
    }
  },[])

  function onChnage() {
    if(isDarkMode){
      document.documentElement.classList.remove("dark");
      setIsDarMode(false);
      localStorage.setItem("theme", "light");
    }else{
      document.documentElement.classList.add("dark");
      setIsDarMode(true);
      localStorage.setItem("theme", "dark");
    }
  }

  return <button onClick={onChnage} className={cn(
    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-hidden"
  )}>
    {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
}