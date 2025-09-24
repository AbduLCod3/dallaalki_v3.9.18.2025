"use client";
import "./SearchBar.scss";
import "../../../public/images/search.png";
import { useState } from "react";
import Image from "next/image";
import searchImage from "../../../public/images/searchImage.png";

const types = ["Buy", "Rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPirce: 0,
  });

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}

        <form action="">
          <input type="text" name="location" placeholder="City Location" />
          <input
            type="text"
            name="minPrice"
            min={0}
            max={1000000}
            placeholder="Min Price"
          />
          <input
            type="text"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Max Price"
          />
          <button>
            <Image src={searchImage} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
