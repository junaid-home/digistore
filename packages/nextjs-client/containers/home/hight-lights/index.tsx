import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";

import HighLightItem from "./highlight-item";

import { HighLightType } from "../types";

function HighLights({ highLights }: { highLights: HighLightType[] }) {
  return (
    <section className="container">
      <div className={cls.highlights}>
        {highLights.map((highLight) => (
          <HighLightItem
            key={highLight.id}
            title={highLight.title}
            desc={highLight.desc}
            imgSrc={highLight.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default HighLights;
