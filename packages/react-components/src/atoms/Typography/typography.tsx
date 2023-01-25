import cls from "@digistore/scss/lib/atoms/Typography.module.css";

import * as React from "react";

import { TypographyOptions } from "./typography-types";

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyOptions
>((props, ref) => {
  const { children, variant, color, className = "", ...other } = props;

  const __getTypographyTag = React.useCallback(() => {
    if (variant === "h1") return "h1";
    if (variant === "h2") return "h2";
    if (variant === "h3") return "h3";

    return "p";
  }, [variant]);

  const __typographyStyles = React.useMemo(() => {
    const classNames: string[] = [];

    classNames.push(className);
    classNames.push(cls.base);

    if (variant === "h1") classNames.push(cls.h1);
    if (variant === "h2") classNames.push(cls.h2);
    if (variant === "h3") classNames.push(cls.h3);
    if (variant === "body1") classNames.push(cls.body1);
    if (variant === "body2") classNames.push(cls.body2);
    if (variant === "body3") classNames.push(cls.body3);
    if (variant === "caption") classNames.push(cls.caption);

    if (color === "white") classNames.push(cls.white);
    if (color === "grey") classNames.push(cls.grey);
    if (color === "greyLight") classNames.push(cls.grey_light);
    if (color === "greyDark") classNames.push(cls.grey_dark);
    if (color === "primary") classNames.push(cls.primary);
    if (color === "secondary") classNames.push(cls.secondary);

    return classNames.join(" ");
  }, [variant, color, className]);

  const Wrapper = __getTypographyTag();

  return (
    <Wrapper ref={ref} className={__typographyStyles} {...other}>
      {children}
    </Wrapper>
  );
});

Typography.displayName = "Typography";
export default Typography;
