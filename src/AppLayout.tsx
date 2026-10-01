import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/Header";

function AppLayout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button id="menu-button" onClick={() => setIsOpen(!isOpen)}>
				{!isOpen ?
					<AiOutlineMenuFold size={24} />
				:	<AiOutlineMenuUnfold size={24} />}
			</button>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<Outlet />
			<Footer />
		</div>
	);
}

export default AppLayout;
