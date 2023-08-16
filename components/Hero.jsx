"use client";

import Image from "next/image";
import { CustomButton } from "./";

const Hero = () => {
	const handleScroll = () => {
		const element = document.querySelector("#discover");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="hero">
			<div className="flex-1 pt-24 sm:pt-36 padding-x">
				<h1 className="hero__title">
					Find, Book, or Rent a Car — Quickly and Easily!
				</h1>
				<p className="hero__subtitle">
					Streamline your car rental experience with our effortless booking
					process.
				</p>
				<CustomButton
					title="Explore Cars"
					containerStyles="bg-primary-blue text-white rounded-full mt-10 font-medium text-lg"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image src="/hero2.png" alt="hero" fill className="object-contain" />
				</div>
				<div className="overflow-hidden hero__image-overlay" />
			</div>
		</div>
	);
};

export default Hero;
