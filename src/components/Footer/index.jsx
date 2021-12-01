import React from "react";
import "./footer.scss";

import Container from "@mui/material/Container";

import { createStyles, makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => {
	return createStyles({
		footer: {
			backgroundColor: "#02020169",
			color: "#fff",
		},
	});
});

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={clsx(classes.footer, "footer")}>
			<Container>
				<div className='footer__content content-footer'>
					<div className='content-footer__block'>
						<p className='content-footer__logo'>Новостник</p>
						<p className='content-footer__text'>Single Page Application</p>
					</div>
					<div className='content-footer__block'>
						<p className='content-footer__diplom'>Дипломный проект</p>
					</div>
					<div className='content-footer__block'>
						<p className='content-footer__text'>Made by</p>
						<p className='content-footer__name'>Заярский Константин</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
