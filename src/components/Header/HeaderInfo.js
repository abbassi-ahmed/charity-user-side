import { useRootContext } from "@/context/context";
import React, { useRef, useState } from "react";
import Social from "./Social";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const HeaderInfo = ({ socials }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const { toggleMenu, user, logout } = useRootContext();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = (e) => {
    logout(e);
  };

  return (
    <div
      className="header-info d-flex align-items-center"
      style={{ marginLeft: "8px" }}
    >
      {socials && <Social socials={socials} />}
      {user ? (
        <>
          <div
            className="gap-10 d-flex align-items-center cursor-pointer"
            onClick={handleToggleMenu}
          >
            <span className="welcome-message mr-10">{user.firstName}</span>
            <div
              className="avatar"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundImage: `url(${user.avatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          {showMenu && (
            <div className="menu" ref={menuRef} style={{ width: "170px" }}>
              <ul>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Se déconnecter
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <Link href="/sign-in">
          <a className="sign-in-btn">
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Se connecter</span>
          </a>
        </Link>
      )}
      <div
        onClick={toggleMenu}
        className="toggle-btn ml-30 canvas_open d-xl-none d-block"
      >
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default HeaderInfo;
