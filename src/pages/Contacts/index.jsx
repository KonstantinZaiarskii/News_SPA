import React from "react";
import "./style.scss";
import routeMain from "./routes";

import photoKot from "assets/img/Group-5.png";
import { Grid } from "@mui/material";

const Contacts = () => (
	<section className='contacts'>
		<Grid container className='contacts__container'>
			<Grid item md={6} className='contacts__block'>
				<div className=' contacts-content content'>
					<a href='tel:+79991234576' className='content__contacts content__contacts_phone'>
						+7 (918) 630 45 76
					</a>
					<p className='content__contacts content__contacts_name'>
						Константин <br /> Заярский
					</p>
					<a
						href='mailto:kostja-kot@mail.ru'
						className='content__contacts content__contacts_email'>
						kostja-kot@mail.ru
					</a>
					<p className='content__contacts content__contacts_special'> JavaScript Developer</p>
					<p className='content__contacts content__contacts_prog'>
						ES5,ES6,
						<span className='react' style={{ color: "blue" }}>
							React
						</span>
					</p>
				</div>
			</Grid>
			<Grid item md={6}>
				<div className='contacts__block-img'>
					<img className='contacts__img' src={photoKot} alt='' />
				</div>
			</Grid>
		</Grid>
	</section>
);

export { routeMain };

export default Contacts;
