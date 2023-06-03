import { useEffect, useState } from "react";

export const useLocalStorage = <T>(item: string) => {
  const [value, setValue] = useState<T | null>(() => {
    if (typeof localStorage !== "undefined") {
      const local = localStorage.getItem(item);
      if (local) return JSON.parse(local);
      return null;
    }
    return null;
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
};
