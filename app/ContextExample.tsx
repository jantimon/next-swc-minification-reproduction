import { ReactNode, createContext } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }: { children: ReactNode}) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export const ContextDemo = {
    Provider: ContextProvider
}