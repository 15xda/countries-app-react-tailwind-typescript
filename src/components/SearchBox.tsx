import type { ChangeEventHandler } from "react";

type SearchBoxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      onChange={onChange}
      type="text"
      className="focus:outline focus:outline-white px-5 py-3 bg-[#1F1F1F] text-white"
      placeholder="Enter a country name ..."
    />
  );
}
