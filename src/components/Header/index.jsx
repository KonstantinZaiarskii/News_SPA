import React, { useState } from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";

import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeNewsListPage } from "pages/NewsListPage";
import { routeMain as routeContacts } from "pages/Contacts";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import Fingerprint from "@mui/icons-material/Fingerprint";

import useStyles from "MaterialStyles/styles";

const Header = props => {
	const [active, setActive] = useState(false);
	const classes = useStyles();

	return (
		<Box>
			<AppBar position='fixed' className='header' style={{ backgroundColor: "rgb(135 135 133)" }}>
				<Container>
					<Toolbar>
						<Typography variant='h6' component='a' href='/' sx={{ flexGrow: 1, color: "#fff" }}>
							Новостник
						</Typography>
						<nav className={classes.nav}>
							<NavLink
								to={routeMainPage()}
                activeStyle={{
									fontSize: 18,
									fontWeight: 600,
								}}
								style={isActive => ({
									color: isActive ? "rgb(36, 36, 36)" : "#fff",
								})}>
								Главная
							</NavLink>
							<NavLink
								to={routeNewsListPage()}
								activeStyle={{
									fontSize: 18,
									fontWeight: 600,
								}}
								style={isActive => ({
									color: isActive ? "rgb(36, 36, 36)" : "#fff",
								})}>
								Новости
							</NavLink>
							<NavLink
								to={routeContacts()}
                activeStyle={{
									fontSize: 18,
									fontWeight: 600,
								}}
								style={isActive => ({
									color: isActive ? "rgb(36, 36, 36)" : "#fff",
								})}>
								Контакты
							</NavLink>
						</nav>
						<IconButton
							className={classes.burger}
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => setActive(!active)}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
					{active && (
						<div className={classes.modal}>
							<nav className={classes.navModal}>
								<NavLink
									to={routeMainPage()}
									style={isActive => ({
										color: isActive ? "rgb(36, 36, 36)" : "#123abc",
									})}>
									Главная
								</NavLink>
								<NavLink
									to={routeNewsListPage()}
									style={isActive => ({
										color: isActive ? "rgb(36, 36, 36)" : "#123abc",
									})}>
									Новости
								</NavLink>
								<NavLink
									to={routeContacts()}
									style={isActive => ({
										color: isActive ? "rgb(36, 36, 36)" : "#123abc",
									})}>
									Контакты
								</NavLink>
								<IconButton aria-label='fingerprint' color='success'>
									<Fingerprint style={{ position: "relative" }} onClick={() => setActive(false)}></Fingerprint>
								</IconButton>
							</nav>
						</div>
					)}
				</Container>
			</AppBar>
			{active && <div onClick={() => setActive(false)} className={classes.overlay}></div>}
		</Box>
	);
};

export default Header;
