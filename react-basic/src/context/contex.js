import { createContext } from "react";

export const userContext = createContext();
const userProvider =userContext.Provider;
const userConsumer =userContext.Consumer;

export {userProvider, userConsumer}; 