import React from "react";

import NewsItem from "./components/NewsItem";
import useStyles from "MaterialStyles/styles";
import clsx from "clsx"



const NewsList = props => {
	const classes = useStyles();
	return (
		<div className={clsx(classes.card, "newClass")}  >
			{props.list.map(news => (
				<NewsItem key={news._id} item={news} />
			))}
		</div>
	);
};
export default NewsList;
