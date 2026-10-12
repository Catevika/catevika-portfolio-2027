import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/Header";

function AppLayout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<a className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-navy focus:p-3" href="#main-content">
				Skip to main content
			</a>
			<button
				id="menu-button"
				type="button"
				aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={isOpen}
				aria-controls="header"
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen ?
					<AiOutlineMenuFold size={24} aria-hidden="true" />
				:	<AiOutlineMenuUnfold size={24} aria-hidden="true" />}
			</button>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<Outlet />
			<Footer />
		</div>
	);
}

export default AppLayout;
