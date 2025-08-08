import type { JSX } from "react";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children?: JSX.Element;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({
  onClick,
  children,
  className = "",
  ...otherProps
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} text-white px-5 py-1 bg-[#1F1F1F] transform hover:-translate-y-1 transition duration-300 ease-in-out hover:outline hover:outline-solid hover:outline-white cursor-pointer`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
