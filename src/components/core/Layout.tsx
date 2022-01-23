import { LoginIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import IconButton from "../utils/IconButton";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>Nebulii</title>
			</Head>
			<nav className="h-12 flex items-center pr-4 border-b bar">
				<button className="h-full w-48 text-center text-xl text-indigo-400 hover:bg-gray-700">
					<Link href="/">Nebulii</Link>
				</button>
				<div className="flex-grow"></div>
				<IconButton title="Log in">
					<LoginIcon />
				</IconButton>
			</nav>
			{children}
		</>
	);
};

export default Layout;
