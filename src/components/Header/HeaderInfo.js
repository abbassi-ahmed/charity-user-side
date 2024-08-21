import { useRootContext } from "@/context/context";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "./SearchIcon";
import Social from "./Social";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";

const HeaderInfo = ({ socials, icon, phone = "", searchColor }) => {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const { toggleMenu, toggleSearch } = useRootContext();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://api.olympiquemnihla.com/users/verify", {
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

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setUser(null);
    router.push("/sign-in");
  };

  return (
    <div className="header-info d-flex align-items-center">
      {socials && <Social socials={socials} />}
      {user ? (
        <>
          <div
            className="gap-10 d-flex align-items-center cursor-pointer"
            onClick={handleToggleMenu}
          >
            <span className="welcome-message mr-10">{user.firstName}</span>
            <Image
              src={user.avatar}
              alt="avatar"
              width={30}
              height={30}
              className="rounded-circle"
            />
          </div>
          {showMenu && (
            <div className="menu" ref={menuRef}>
              <ul>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <Link href="/sign-in">
          <a className="d-flex align-items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-10" />
            <span>Sign In</span>
          </a>
        </Link>
      )}
      <div
        onClick={toggleMenu}
        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
      >
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default HeaderInfo;
