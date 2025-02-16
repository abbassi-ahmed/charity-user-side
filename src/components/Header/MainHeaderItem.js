import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import HeaderInfo from "./HeaderInfo";
import HeaderMenu from "./HeaderMenu";
import { useRootContext } from "@/context/context";

const MainHeaderItem = ({
  logo,
  navItems = [],
  icon,
  phone = "",
  socials,
  searchColor,
}) => {
  const { user } = useRootContext();
  const updatedNavItems = navItems
    .filter((navItem) => {
      return !navItem.role || (user && user.isModerator);
    })
    .map((navItem) => {
      if (navItem.subNavItems) {
        return {
          ...navItem,
          subNavItems: navItem.subNavItems.filter(
            (subNavItem) => !subNavItem.role || (user && user.isModerator)
          ),
        };
      }
      return navItem;
    });

  return (
    <Row>
      <Col lg={12}>
        <div className="main-header-item">
          <div className="main-header-menus d-flex justify-content-between align-items-center">
            <div className="header-logo">
              <Link href="/" className="d-none d-lg-block">
                <Image src={logo.src} alt="logo" width={120} height={110} />
              </Link>
            </div>

            <HeaderMenu navItems={updatedNavItems} />

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
