import cls from "@digistore/scss/lib/atoms/Input.module.css";

import * as React from "react";
import { InputOptions } from "./input-types";

const Input = React.forwardRef<HTMLInputElement, InputOptions>((props, ref) => {
  const { className, fullWidth, ...other } = props;

  const __inputStyles = React.useMemo(() => {
    const classNames: string[] = [];

    classNames.push(cls.input);
    fullWidth && classNames.push(cls.input_full_width);
    className && classNames.push(className);

    return classNames.join(" ");
  }, [fullWidth, className]);

  return <input ref={ref} className={__inputStyles} {...other} />;
});

Input.displayName = "Input";
export default Input;
