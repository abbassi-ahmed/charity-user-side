import useToggle from "@/hooks/useToggle";
import React, { useEffect, useState } from "react";
import context from "./context";
import { useRouter } from "next/router";

const ContextProvider = ({ children }) => {
  const [menuStatus, toggleMenu] = useToggle(false);
  const [openSearch, toggleSearch] = useToggle(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [isModerator, setIsModerator] = useState(false);
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(
        "https://api.olympiquemnihla.com/users/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );
      if (!response.ok) throw new Error("Failed to verify token");
      const data = await response.json();
      if (data && data.firstName) {
        setUser(data);
        setIsModerator(data.isModerator);
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      localStorage.removeItem("token");
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setUser(null);
    router.push("/sign-in");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    menuStatus,
    fetchUser,
    toggleMenu,
    user,
    setUser,
    logout,
    isModerator,
    openSearch,
    toggleSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
