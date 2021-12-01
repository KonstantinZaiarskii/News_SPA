import React from "react";

import Card from "@mui/material/Card";

import { NavLink } from "react-router-dom";
import { routeMain as routeNewsDetail } from "pages/NewsDetail";

import CardContent from "@mui/material/CardContent";
import DateView from "components/DateView";

import "./style.scss";

// const bull = (
// 	<Box component='span' sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
// 		•
// 	</Box>
// );

// const card = (
// 	<React.Fragment>
// 		<CardContent>
// 			<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
// 				Word of the Day
// 			</Typography>
// 			<Typography variant='h5' component='div'>
// 				be{bull}nev{bull}o{bull}lent
// 			</Typography>
// 			<Typography sx={{ mb: 1.5 }} color='text.secondary'>
// 				adjective
// 			</Typography>
// 			<Typography variant='body2'>
// 				well meaning and kindly.
// 				<br />
// 				{'"a benevolent smile"'}
// 			</Typography>
// 		</CardContent>
// 	</React.Fragment>
// );

const NewsItem = props => {
	return (
		<Card className='newsCard' variant='outlined' style={{ maxWidth: 310, minHeight: 200 }}>
			<NavLink to={routeNewsDetail(props.item._id)}>
				<CardContent className='newsCard__content'>
					<p>{props.item.title}</p>
					<div className='newsCard__link-data'>
						<p className='newsCard__link' color='text.secondary'>
							{props.item.clean_url}
						</p>
						<DateView value={props.item.published_date} />
					</div>
				</CardContent>
			</NavLink>
		</Card>
	);
};

export default NewsItem;
