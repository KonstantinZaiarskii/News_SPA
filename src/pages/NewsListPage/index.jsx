import React, { useState, useEffect } from "react";
import "./style.scss";
import routeMain from "./routes";

import getNews from "getNews";
import NewsList from "components/NewsList";
import PreloaderProgress from "components/preloader";

import Typography from "@mui/material/Typography";
import useStyles from "MaterialStyles/styles";

import clsx from "clsx"

const NewsListPage = () => {
	// const [loading, setLoading] = useState(false);
	const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

	const [getNewsList, setGetNewsList] = useState([]);
	useEffect(() => {
		getNews().then(response => {
			setGetNewsList(response.data.articles);
			//   setLoading(true);
			// setTimeout(() => {
			// 	setLoading(false);
			// }, 3000);
		});
	}, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

	return (
 		<section className={clsx(classes.preloader, "News")}>
			{getNewsList.length === 0 ? (
				<PreloaderProgress  value={progress}/>
			) : (
				<>
					{" "}
					<Typography variant='h2' className={classes.title}>
						Будь в курсе <span style={{ color: "blue" }}>событий</span>{" "}
					</Typography>
					{getNewsList.length > 0 && <NewsList list={getNewsList} />}
				</>
			)}
		</section>
	);
};
export { routeMain };

export default NewsListPage;
