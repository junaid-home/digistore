import cls from "@digistore/scss/lib/atoms/Icons.module.css";

import * as React from "react";

interface Options {
  totalCount: number;
}

export default function ({
  totalCount = 0,
  ...other
}: Options & React.SVGAttributes<SVGElement>) {
  return (
    <span className={cls.container}>
      <svg
        width="41"
        height="37"
        viewBox="0 0 41 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...other}
      >
        <path
          d="M31.5444 25.9907H11.1904L12.2124 23.9092L29.1929 23.8784C29.7671 23.8784 30.2593 23.4683 30.3618 22.9009L32.7134 9.73828C32.7749 9.39307 32.6826 9.0376 32.457 8.76758C32.3455 8.63469 32.2065 8.52764 32.0495 8.45387C31.8925 8.38009 31.7213 8.34135 31.5479 8.34033L9.94629 8.26855L9.76172 7.40039C9.64551 6.84668 9.14648 6.44336 8.5791 6.44336H3.29834C2.97834 6.44336 2.67146 6.57048 2.44519 6.79675C2.21891 7.02302 2.0918 7.32991 2.0918 7.6499C2.0918 7.9699 2.21891 8.27679 2.44519 8.50306C2.67146 8.72933 2.97834 8.85645 3.29834 8.85645H7.60156L8.4082 12.6914L10.394 22.3061L7.8374 26.4795C7.70463 26.6587 7.62466 26.8715 7.60654 27.0938C7.58842 27.316 7.63287 27.539 7.73486 27.7373C7.93994 28.144 8.35352 28.4004 8.81152 28.4004H10.958C10.5004 29.0082 10.2532 29.7485 10.2539 30.5093C10.2539 32.4438 11.8262 34.0161 13.7607 34.0161C15.6953 34.0161 17.2676 32.4438 17.2676 30.5093C17.2676 29.7471 17.0146 29.0054 16.5635 28.4004H22.0698C21.6122 29.0082 21.3651 29.7485 21.3657 30.5093C21.3657 32.4438 22.938 34.0161 24.8726 34.0161C26.8071 34.0161 28.3794 32.4438 28.3794 30.5093C28.3794 29.7471 28.1265 29.0054 27.6753 28.4004H31.5479C32.2109 28.4004 32.7544 27.8603 32.7544 27.1938C32.7524 26.8742 32.6241 26.5683 32.3974 26.3429C32.1707 26.1175 31.8641 25.9909 31.5444 25.9907ZM10.4487 10.6475L30.1294 10.7124L28.2017 21.5063L12.7422 21.5337L10.4487 10.6475ZM13.7607 31.5894C13.166 31.5894 12.6807 31.104 12.6807 30.5093C12.6807 29.9145 13.166 29.4292 13.7607 29.4292C14.3555 29.4292 14.8408 29.9145 14.8408 30.5093C14.8408 30.7957 14.727 31.0705 14.5245 31.273C14.3219 31.4756 14.0472 31.5894 13.7607 31.5894ZM24.8726 31.5894C24.2778 31.5894 23.7925 31.104 23.7925 30.5093C23.7925 29.9145 24.2778 29.4292 24.8726 29.4292C25.4673 29.4292 25.9526 29.9145 25.9526 30.5093C25.9526 30.7957 25.8388 31.0705 25.6363 31.273C25.4337 31.4756 25.159 31.5894 24.8726 31.5894Z"
          fill="black"
        />
        {/* <circle cx="36" cy="5" r="5" fill="#DC2626" />
        <path
          d="M36.0639 8.07955C35.7647 8.07765 35.4759 8.02746 35.1974 7.92898C34.9209 7.83049 34.6728 7.67045 34.4531 7.44886C34.2334 7.22727 34.0592 6.93371 33.9304 6.56818C33.8035 6.20265 33.7401 5.75379 33.7401 5.22159C33.742 4.73295 33.7978 4.2964 33.9077 3.91193C34.0194 3.52557 34.1785 3.19792 34.3849 2.92898C34.5933 2.66004 34.8423 2.45549 35.1321 2.31534C35.4219 2.1733 35.7467 2.10227 36.1065 2.10227C36.4948 2.10227 36.8376 2.17803 37.1349 2.32955C37.4323 2.47917 37.6709 2.68277 37.8509 2.94034C38.0327 3.19792 38.1425 3.48674 38.1804 3.80682H36.9673C36.92 3.60417 36.8205 3.44508 36.669 3.32955C36.5175 3.21402 36.33 3.15625 36.1065 3.15625C35.7277 3.15625 35.4399 3.32102 35.2429 3.65057C35.0478 3.98011 34.9484 4.42803 34.9446 4.99432H34.9844C35.0715 4.82197 35.1889 4.67519 35.3366 4.55398C35.4863 4.43087 35.6558 4.33712 35.8452 4.27273C36.0365 4.20644 36.2382 4.1733 36.4503 4.1733C36.795 4.1733 37.1018 4.25473 37.3707 4.41761C37.6397 4.5786 37.8518 4.80019 38.0071 5.08239C38.1624 5.36458 38.2401 5.6875 38.2401 6.05114C38.2401 6.44508 38.1482 6.79545 37.9645 7.10227C37.7827 7.40909 37.5279 7.64962 37.2003 7.82386C36.8745 7.99621 36.4957 8.08144 36.0639 8.07955ZM36.0582 7.11364C36.2476 7.11364 36.4171 7.06818 36.5668 6.97727C36.7164 6.88636 36.8338 6.76326 36.919 6.60795C37.0043 6.45265 37.0469 6.27841 37.0469 6.08523C37.0469 5.89205 37.0043 5.71875 36.919 5.56534C36.8357 5.41193 36.7202 5.28977 36.5724 5.19886C36.4247 5.10795 36.2562 5.0625 36.0668 5.0625C35.9247 5.0625 35.7931 5.08902 35.6719 5.14205C35.5526 5.19508 35.4474 5.26894 35.3565 5.36364C35.2675 5.45833 35.1974 5.56818 35.1463 5.69318C35.0952 5.81629 35.0696 5.94792 35.0696 6.08807C35.0696 6.27557 35.1122 6.44697 35.1974 6.60227C35.2846 6.75758 35.402 6.88163 35.5497 6.97443C35.6993 7.06723 35.8688 7.11364 36.0582 7.11364Z"
          fill="white"
        /> */}
      </svg>

      <span className={cls.icon_badge}>{totalCount}</span>
    </span>
  );
}
