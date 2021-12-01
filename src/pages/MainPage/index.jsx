import React, { useState, useEffect } from "react";
import "./style.scss";
import routeMain from "./routes";

import NewsList from "components/NewsList";
//import newsListMocks from "../../fixtures/newsListMocks";
import HashLoader from "react-spinners/HashLoader";
import Typography from "@mui/material/Typography";
import useStyles from "MaterialStyles/styles";

import getNews from "getNews";
import clsx from "clsx"



const MainPage = () => {
	const classes = useStyles();
	const [getNewsList, setGetNewsList] = useState([]);

	useEffect(() => {
		getNews().then(response => {
			setGetNewsList(response.data.articles);
			
		});
	}, []);

	return (
		<section className={clsx(classes.preloader, "main-page")}>
			{getNewsList.length === 0 ? (
				<HashLoader color={"#36D7B7"} loading={getNewsList} size={50} />
			) : (
				<>
					<Typography variant='h2' className={classes.title}>
						Всегда свежие <span style={{ color: "blue" }}>новости</span>{" "}
					</Typography>
					{/* {newsListMocks.length > 0 && <NewsList list={newsListMocks.slice(0,6)}/>} */}
					{getNewsList.length > 0 && <NewsList list={getNewsList.slice(0, 6)} />}
				</>
			)}
		</section>
	);
};
export { routeMain };

export default MainPage;
