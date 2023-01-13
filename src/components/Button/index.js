import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-radius15",
  RoundedBorder10: "rounded-radius10",
};
const variants = {
  FillWhiteA700f4: "bg-white_A700_f4 text-gray_900",
  OutlineBlack9003f: "bg-cyan_300_66 shadow-bs text-cyan_300",
  FillCyan300b2: "bg-cyan_300_b2 text-white_A701",
};
const sizes = {
  sm: "md:p-[3px] sm:p-[3px] p-[6px]",
  md: "p-[12px] sm:p-[6px] md:p-[7px]",
  lg: "md:p-[10px] p-[16px] sm:px-[15px] sm:py-[8px]",
  xl: "md:p-[12px] p-[19px] sm:px-[15px] sm:py-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder15", "RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillWhiteA700f4",
    "OutlineBlack9003f",
    "FillCyan300b2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder15",
  variant: "FillWhiteA700f4",
  size: "sm",
};

export { Button };
