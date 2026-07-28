import { Moon, Sun } from "lucide-react";
import { useState } from "react"

export function DarkModeBtn(){
  const [isDarkMode, setIsDarMode] = useState(false);

  function onChnage() {
    if(isDarkMode){
      document.documentElement.classList.remove("dark");
      setIsDarMode(false);
    }else{
      document.documentElement.classList.add("dark");
      setIsDarMode(true);
    }
  }

  return <button onClick={onChnage}>
    {" "}
    {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
}