"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { SearchManufacturer } from ".";

const SearchButton = ({ otherClasses }) => (
	<button type="submit" className={`z-10 ${otherClasses}`}>
		<Image
			src="/magnifying-glass.svg"
			alt="search-icon"
			width={40}
			height={40}
			className="object-contain rounded-full "
		/>
	</button>
);

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");

	const [model, setModel] = useState("");

	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();

		if (manufacturer === "" && model === "") {
			return alert("Please fill in the search bar");
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};

	const updateSearchParams = (model, manufacturer) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}

		const newPathName = `${
			window.location.pathname
		}?${searchParams.toString()}`;

		router.push(newPathName);
	};

	return (
		<form className="searchbar " onSubmit={handleSearch}>
			<div className="searchbar__item ">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden rounded-full -ml-11" />
			</div>

			<div className="searchbar__item border-2 sm:border-l-0 border-gray-200 rounded-full sm:rounded-l-none">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					alt="car-logo"
					className="absolute w-[20px] h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder="DB11"
					className="searchbar__input"
				/>
				<SearchButton otherClasses="sm:hidden rounded-full  -ml-3" />
			</div>
			<SearchButton otherClasses="max-sm:hidden rounded-full  -ml-11" />
		</form>
	);
};

export default SearchBar;
