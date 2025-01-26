"use client";

import { loginAction } from "@/app/actions/auth";
import { createContext, useContext, useState } from "react";

interface UserContextProps {
  username?: string;
  setUsername?: (username: string) => void;
  login?: (email: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps>({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState("yanis");
  const [user, setUser] = useState(null);

  const login = async (email: string) => {
    console.log("USER before : ");
    const user = await loginAction(email);
    if (!user) return console.warn("Login failed");
    console.log("USER : ", user);
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ username, setUsername, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
