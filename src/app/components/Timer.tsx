'use client';
import React from 'react';

const Timer = () => {
	const countDate = new Date('Oct 20, 2023 13:00:00').getTime();
	const [dateNow, setDate] = React.useState(new Date().getTime());
	React.useEffect(() => {
		const interval = setInterval(() => {
			setDate(countDate - new Date().getTime());
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [dateNow]);
	const days = Math.floor(dateNow / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(dateNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((dateNow % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((dateNow % (1000 * 60)) / 1000);

	return (
		<React.Fragment>
			<h1>
				{days}
				<br />
				hari
			</h1>
			<h1>
				{hours}
				<br />
				jam
			</h1>
			<h1>
				{minutes}
				<br />
				menit
			</h1>
			<h1>
				{seconds}
				<br />
				detik
			</h1>
		</React.Fragment>
	);
};

export default Timer;
