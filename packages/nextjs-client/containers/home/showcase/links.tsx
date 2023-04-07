import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";
import Link from "next/link";

import { Typography } from "@digistore/react-components";

import { LinkType } from "../types";

function Links({ links }: { links: LinkType[] }) {
  return (
    <nav className={cls.links}>
      {links.map((link) => (
        <Link key={link.id} legacyBehavior href={link.href}>
          <a>
            <Typography variant="body2">{link.pathname}</Typography>
          </a>
        </Link>
      ))}
    </nav>
  );
}

export default Links;
