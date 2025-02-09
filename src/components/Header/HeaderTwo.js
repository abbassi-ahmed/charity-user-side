import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import MainHeaderItem from "./MainHeaderItem";

const { logo2, navItems, phone, icon, socials } = headerData;

const HeaderTwo = () => {
  const { scrollTop } = useScroll(160);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3636/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.firstName) {
            setUser(data);
          } else {
            localStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <header className="header-area header-2-area">
      <div className={`main-header${scrollTop ? " sticky" : ""}`}>
        <Container fluid className="p-0">
          <MainHeaderItem
            logo={logo2}
            navItems={navItems}
            icon={icon}
            phone={phone}
            searchColor="#fff"
          />
          <div
            className="auth-buttons align-items-center"
            style={{ position: "absolute", right: "20px", top: "20px" }}
          >
            {user ? (
              <>
                <span className="welcome-message">
                  Welcome, {user.firstName}
                </span>
                <button className="main-btn logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <a className="main-btn">Se connecter</a>
                </Link>
                <Link href="/sign-up">
                  <a className="main-btn">S&apos;inscrire</a>
                </Link>
              </>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default HeaderTwo;
