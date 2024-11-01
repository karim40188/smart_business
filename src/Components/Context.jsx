/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export let Context = createContext("");
export function ContextProvider({ children }) {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Context.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </Context.Provider>
  );
}
