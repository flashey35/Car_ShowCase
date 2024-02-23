"use client";

import { SearchManufacturerProps } from "@/Types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative  w-full">
          <Combobox.Button className="absolute top-[14px] ">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              height={20}
              width={20}
              ml-4
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
