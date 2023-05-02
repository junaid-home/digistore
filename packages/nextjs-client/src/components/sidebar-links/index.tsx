import cls from "@digistore/scss/lib/templates/Sidebar-links.module.css";

import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@digistore/react-components";

import { signOut } from "../../store/auth-slice";
import { wrapper } from "../../store";

function SidebarLinks() {
  const router = useRouter();
  const dispatch = useDispatch();

  const links = [
    { pathName: "My Profile", href: "/profile" },
    { pathName: "My Favorites", href: "/likes" },
    { pathName: "My Orders", href: "/orders" },
  ];

  const handleLogOut = () => {
    dispatch(signOut(null));
  };

  return (
    <div className={cls.links}>
      {links.map((link) => {
        return (
          <Link key={link.href} href={link.href} className={cls.links_a}>
            <div
              className={`${cls.links_item} ${
                router.pathname === link.href && cls.links_item_active
              }`}
            >
              <Typography className="bold" variant="body2">
                {link.pathName}
              </Typography>
            </div>
          </Link>
        );
      })}
      <div onClick={handleLogOut} className={`${cls.links_item}`}>
        <Typography className="bold" variant="body2">
          SignOut
        </Typography>
      </div>
    </div>
  );
}

export default SidebarLinks;
