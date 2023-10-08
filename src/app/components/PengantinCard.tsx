'use client';
import React from 'react';
import { TPengantin } from '../constants/text';

const PengantinCard = ({ alamat, ayah, gender, ibu, nama }: TPengantin) => {
	return (
		<div>
			<h1 className='text-3xl text-center'>{nama}</h1>
			<p className='text-center text-sm'>
				{gender} dari pasangan {ayah} dan {ibu} <br />
				{alamat}
			</p>
		</div>
	);
};

export default PengantinCard;
