import { FC, useState } from "react";
import { SORT_OPTIONS } from "@src/constants";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface SortItemsProps {
  onSortClick: (value: any) => void;
  sortType: any;
}

const SortItems: FC<SortItemsProps> = ({ onSortClick, sortType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSelect = (option: any) => {
    onSortClick(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-between border border-black-800 p-3 my-3 md:w-64">
        <div className="flex flex-col md:w-full">
          <label className="text-indigo-300">Sort</label>
          <button className="text-[20px]" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center w-[180px] md:w-full">
              {sortType.label}
              {isOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col absolute w-64 bg-white mt-[19rem]">
          {SORT_OPTIONS.map((option) => (
            <button
              onClick={() => onSelect(option)}
              key={option?.value}
              className="hover:bg-indigo-400 p-4 w-full text-left"
            >
              {option?.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SortItems;
