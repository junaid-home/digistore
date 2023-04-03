import cls from "@digistore/scss/lib/templates/Sidebar-links.module.css";

import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Typography } from "@digistore/react-components";

function SidebarLinks() {
  const router = useRouter();

  const links = [
    { pathName: "My Profile", href: "/profile" },
    { pathName: "My Favorites", href: "/likes" },
    { pathName: "My Orders", href: "/orders" },
  ];

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
    </div>
  );
}

export default SidebarLinks;
