import cls from "@digistore/scss/lib/templates/Layout.module.css";

import * as React from "react";

import Layout from "./common";

import SidebarLinks from "../sidebar-links";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../store/auth-slice";
import { useRouter } from "next/router";

function SidebarWithLinks({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated } = useSelector(selectAuthState);

  React.useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);

  return (
    <Layout fullBorder color="grey">
      <div className={`container ${cls.swl_wrapper}`}>
        <div className={cls.swl_main}>
          <div className={cls.swl_sidebar}>
            <SidebarLinks />
          </div>
          <div className={cls.swl_content}>{children}</div>
        </div>
      </div>
    </Layout>
  );
}

export default SidebarWithLinks;
