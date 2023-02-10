import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import PrimaryCard from "./primary-card";
import SecondaryCard from "./secondary-card";

function Tabs() {
  return (
    <div className={cls.showcase}>
      <PrimaryCard />
      <div>
        <SecondaryCard color="#D8E8FA" />
        <SecondaryCard color="#DFE3E4" />
      </div>
    </div>
  );
}

export default Tabs;
