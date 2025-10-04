import React, { createContext, useState, ReactNode } from "react";

// Define the TypeScript interface for the context
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the context with default values (to satisfy TS)
export const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};
