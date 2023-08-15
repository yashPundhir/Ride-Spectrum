import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100 mt-6 border-t-2 border-gray-200">
			<div className="flex max-md:flex-col flex-wrap justify-between items-center gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="/logo.png"
						alt="logo"
						width={300}
						height={50}
						className="object-contain"
					/>
					<p className="text-base ml-1 text-gray-700 font-semibold">
						Copyright © 2023 - All right reserved.
					</p>
				</div>
				<div className="footer__copyrights-link">
					<Link href="/" className="text-gray-500 font-semibold">
						Privacy Policy
					</Link>
					<Link href="/" className="text-gray-500 font-semibold">
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
