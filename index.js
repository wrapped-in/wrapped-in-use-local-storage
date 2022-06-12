import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (value === undefined || value === null || value.length === 0) localStorage.removeItem(key);

    if (value !== undefined && value !== null && value.length !== 0) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value])

  const removeItem = () => localStorage.removeItem(key);

  return [value, setValue, removeItem];
}

export default useLocalStorage;