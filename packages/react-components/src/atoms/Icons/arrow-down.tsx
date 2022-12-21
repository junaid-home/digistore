import * as React from "react";

interface Options {
  color: string;
}

export default function ({ color = "#A1A1A1" }: Options) {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.23656 2.42773H7.48321C7.43198 2.42773 7.38377 2.45285 7.35364 2.49403L4.49995 6.42751L1.64627 2.49403C1.61614 2.45285 1.56792 2.42773 1.51669 2.42773H0.763346C0.698056 2.42773 0.659886 2.50206 0.698056 2.5553L4.2398 7.438C4.36837 7.61479 4.63154 7.61479 4.7591 7.438L8.30085 2.5553C8.34002 2.50206 8.30185 2.42773 8.23656 2.42773Z"
        fill={color}
      />
    </svg>
  );
}
