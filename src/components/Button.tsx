import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva("border h-12 rounded-lg px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-black text-white border-black",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
