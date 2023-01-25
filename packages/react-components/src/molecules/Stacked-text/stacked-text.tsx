import * as React from "react";
import { Typography } from "../../atoms";

function StackedText({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Typography variant="body3" color="greyDark">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </div>
  );
}

export default StackedText;
