import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import HeaderInfo from "./HeaderInfo";
import HeaderMenu from "./HeaderMenu";

const MainHeaderItem = ({
  logo,
  navItems = [],
  navDefault = [],
  icon,
  phone = "",
  socials,
  searchColor,
}) => {
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
  return (
    <Row>
      <Col lg={12}>
        <div className="main-header-item">
          <div className="main-header-menus d-flex justify-content-between align-items-center">
            <div className="header-logo">
              <Link href="/">
                <Image src={logo.src} alt="logo" />
              </Link>
            </div>

            {user?.id && user?.subscription ? (
              <HeaderMenu navItems={navItems} />
            ) : (
              <HeaderMenu navItems={navDefault} />
            )}

            <HeaderInfo
              icon={icon}
              phone={phone}
              socials={socials}
              searchColor={searchColor}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainHeaderItem;
