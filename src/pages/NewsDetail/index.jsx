import React, { useState, useEffect } from "react";
import "./style.scss";
import routeMain from "./routes";

import { useParams } from "react-router-dom";

import getNews from "getNews";
import DateView from "components/DateView";

import { Grid } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Typography from "@mui/material/Typography";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  const styleTheme = createTheme();
	return createStyles({
		newsDetail: {
			gap: 80,
      [styleTheme.breakpoints.down("lg")]: {
        justifyContent: "center",
				gap: 10,
			},
		},
		newsDetail__block: {
			display: "flex",
			flexDirection: "column!important",
			justifyContent: "space-evenly",
			maxWidth: 526,
		},
		newsDetail__summary: {
			marginBottom: 30,
		},
	});
});

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

const NewsDetail = () => {
	const classes = useStyles();

	const { id } = useParams();
	const [news, setNews] = useState(null);

	useEffect(() => {
		getNews().then(response => {
			setNews(response.data.articles.find(item => item._id === id));
		});
	}, [id]);

	return (
		<section className={'newsDetail'}>
			{news === null ? (
				<HashLoader css={override} color={"#36D7B7"} loading={news} size={100} />
			) : (
				<Grid container className={classes.newsDetail}>
					<Grid item md={6} className={classes.newsDetail__block}>
						<Typography variant='h4' className='newsDetail__title'>
							{news.title}
						</Typography>
						<Typography variant='p' className='newsDetail__source'>
							{news.clean_url}
						</Typography>
						<DateView value={news.published_date} />
					</Grid>
					<Grid item md={6} className={classes.newsDetail__block}>
						<img className={classes.newsDetail__summary} src={news.media} alt={news.media} />
						<Typography variant='p' className='newsDetail__summary'>
							{news.summary}
						</Typography>
					</Grid>
				</Grid>
			)}
		</section>
	);
};
export { routeMain };

export default NewsDetail;
