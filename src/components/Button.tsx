import type { JSX } from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  children?: JSX.Element;
  className?: string;
};

export default function Button({
  text,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} text-white px-5 py-1 bg-[#1F1F1F] transform hover:-translate-y-1 transition duration-300 ease-in-out hover:outline hover:outline-solid hover:outline-white cursor-pointer`}
    >
      {children}
      <span>{text}</span>
    </button>
  );
}
