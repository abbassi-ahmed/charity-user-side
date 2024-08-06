import React from "react";
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
  user,
}) => {
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
            {user && <HeaderMenu navItems={navItems} />}
            <HeaderMenu navItems={navDefault} />
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
