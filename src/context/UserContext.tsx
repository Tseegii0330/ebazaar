"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import { fetchUser } from "@/lib/fetchUser";

interface UserContextType {
  setUser: (userProfile: null) => void;
  userProfile: any | null;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userProfile, setUser] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    const loadUser = async () => {
      if (status === "authenticated" && session?.ebazaar_token) {
        try {
          const data = await fetchUser(session?.ebazaar_token);

          setUser(data.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadUser();
  }, [session, status]);

  return (
    <UserContext.Provider value={{ setUser, userProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
