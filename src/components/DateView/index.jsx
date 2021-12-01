import React from "react";

import prepareDate from "utils/prepareDate";

const DateView = props => {
	const { day, month } = prepareDate(props.value);
	return (
		<div className='date-view'>
			<span className='day'>{day}</span> / {" "}
			<span className='month'>{month}</span>
		</div>
	);
};

export default DateView;
