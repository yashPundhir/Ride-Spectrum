import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6">
				<Link href="/" className="flex justify-center items-center">
					<Image
						src="/logo.png"
						alt="logo"
						width={300}
						height={50}
						className="object-contain"
					/>
				</Link>
				<CustomButton
					title="Sign In"
					btnType="button"
					containerStyles="text-primary-blue rounded-full bg-white hover:bg-primary-blue hover:text-white min-w-[130px] border-2 border-blue-500 font-semibold text-lg"
				/>
			</nav>
		</header>
	);
};

export default Navbar;
