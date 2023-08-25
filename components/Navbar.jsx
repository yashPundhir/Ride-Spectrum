"use client";

import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./";

const Navbar = () => {
	const handleClick = () => {
		const element = document.querySelector("#discover");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="w-full z-20 bg-opacity-20 backdrop-blur-md top-0 fixed">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6">
				<Link href="/" className="flex justify-center items-center">
					<Image
						src="/logo2.png"
						alt="logo"
						width={300}
						height={50}
						className="object-contain sm:w-[300px] xs:w-[200px] w-[170px]"
					/>
				</Link>
				<CustomButton
					title="Scroll to Cars"
					btnType="button"
					handleClick={handleClick}
					containerStyles="text-primary-blue rounded-full bg-white  md:min-w-[130px] border-2 border-blue-500 font-bold xs:text-sm text-[10px] sm:text-lg sm:w-auto xs:w-[180px] w-[120px]"
				/>
			</nav>
		</header>
	);
};

export default Navbar;
