import cls from "@digistore/scss/lib/pages/Home.module.css";

import * as React from "react";
import Countdown from "react-countdown";

import { Typography } from "@digistore/react-components";

function renderer({
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: any;
  minutes: any;
  seconds: any;
  completed: boolean;
}) {
  if (hours.length < 2) hours += "00";

  if (completed) return null;
  else
    return (
      <div className={cls.countdown}>
        <Typography variant="body2" color="greyDark">
          Offer ends in
        </Typography>
        <span className={cls.countdown_item}>
          <Typography variant="h3" color="white">
            {hours}
          </Typography>
        </span>
        :
        <span className={cls.countdown_item}>
          <Typography variant="h3" color="white">
            {minutes}
          </Typography>
        </span>
        :
        <span className={cls.countdown_item}>
          <Typography variant="h3" color="white">
            {seconds}
          </Typography>
        </span>
      </div>
    );
}

function CountDown({ date }: { date: number }) {
  return <Countdown date={date} renderer={renderer} />;
}

export default CountDown;
