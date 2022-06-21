import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextInterface {
    user: string,
    setUser: Dispatch<SetStateAction<string>>,
    loggedState: boolean,
    setLoggedState: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<AppContextInterface | null>(null);