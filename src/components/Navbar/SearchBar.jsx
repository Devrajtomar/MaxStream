"use client";

import { useState } from "react";
import { CustomButton } from "../Custom";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <form className="SearchBar" action={`/search/${query}`}>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none w-[80%]"
      />
      <AiOutlineSearch
        size={40}
        className=" CustomButton px-2 md:hidden font-semibold rounded-full justify-self-end italic mr-1 cursor-pointer hover:scale-105 "
        onClick={() => router.push(`/search/${query}`)}
      />
      <CustomButton
        title="Search"
        containerStyle="px-2 md:flex hidden font-semibold rounded-full justify-self-end italic py-1 mr-1 cursor-pointer hover:scale-105"
        handleClick={() => router.push(`/search/${query}`)}
      />
    </form>
  );
};

export default SearchBar;
