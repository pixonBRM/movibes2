import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[20px] md:text-[26px] text-[40px]",
  h2: "font-medium sm:text-[31px] md:text-[33px] text-[35px]",
  h3: "sm:text-[21px] md:text-[23px] text-[25px]",
  h4: "sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-medium sm:text-[19px] md:text-[21px] text-[23px]",
  h6: "text-[20px]",
  body1: "font-medium text-[19px]",
  body2: "text-[18px]",
  body3: "font-medium text-[16px]",
  body4: "text-[15px]",
  body5: "text-[14px]",
  body6: "font-medium text-[13px]",
  body7: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
