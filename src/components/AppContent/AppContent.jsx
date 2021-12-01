import React from "react";
import "./AppContent.scss";

import Header from "components/Header";
import Offer from "components/Offer";
import Footer from "components/Footer";

const AppContent = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<Offer />
			</main>
			<Footer />
		</div>
	);
};
export default AppContent;
