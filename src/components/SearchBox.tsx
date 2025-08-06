import type { ChangeEventHandler } from "react";

type SearchBoxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      onChange={onChange}
      type="text"
      className="px-5 py-3 focus:outline-none bg-[#1F1F1F] text-white"
      placeholder="Enter a country name ..."
    />
  );
}
