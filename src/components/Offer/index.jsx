import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import NewsListPage, { routeMain as routeNewsListPage } from "pages/NewsListPage";
import NewsDetail, { routeMain as routeNewsDetail } from "pages/NewsDetail";
import Contacts, { routeMain as routeContacts } from "pages/Contacts";

import Container from "@mui/material/Container";

import useStyles from "MaterialStyles/styles";


const Offer = () => {
  const classes = useStyles();
  
	return (
		<section className={classes.offer}>
			<Container>
				<div className='offer__title'>
					<Switch>
						<Route exact path={routeMainPage()} component={MainPage} />
						<Route exact path={routeNewsListPage()} component={NewsListPage} />
						<Route exact path={routeNewsDetail()} component={NewsDetail} />
						<Route exact path={routeContacts()} component={Contacts} />
						<Redirect
							to={{
								pathname: routeMainPage(),
							}}
						/>
					</Switch>
				</div>
			</Container>
		</section>
	);
};

export default Offer;
