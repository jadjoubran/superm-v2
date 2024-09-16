import { useState, createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
}
