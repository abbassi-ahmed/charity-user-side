import { useRootContext } from "@/context/context";
import { useRouter } from "next/router";
import React from "react";
import Link from "../Reuseable/Link";

const NavItem = ({ navItem = {}, mobile = false, activeId, handleActive }) => {
  const { pathname } = useRouter();
  const { toggleMenu, user } = useRootContext();

  const { name = "", href = "", subNavItems = [], id } = navItem;

  const handleExpand = () => {
    if (mobile) {
      if (href) {
        toggleMenu(false);
      } else {
        handleActive?.(id);
      }
    }
  };

  const filteredSubNavItems = subNavItems.filter(
    (subNavItem) => !subNavItem.role || (user && user.isModerator)
  );

  let current = pathname === href;
  if (!current) {
    current = filteredSubNavItems.some((item) => item.href === pathname);
  }

  const active = id === activeId;

  return (
    <li>
      <Link
        className={current ? "active" : ""}
        onClick={handleExpand}
        href={href}
      >
        {name}{" "}
        {mobile && filteredSubNavItems.length > 0 && (
          <span className="menu-expand">
            <i className="fa fa-angle-down"></i>
          </span>
        )}
      </Link>
      {filteredSubNavItems.length > 0 && (
        <ul className={`sub-menu ${mobile && !active ? "d-none" : "d-block"}`}>
          {filteredSubNavItems.map(({ href, name, id }) => (
            <li key={id}>
              <Link onClick={() => mobile && toggleMenu(false)} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
