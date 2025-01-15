// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
  // Add more global state here as needed
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  // Handle resizing to update isMobile state
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = { isMobile, setIsMobile };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};