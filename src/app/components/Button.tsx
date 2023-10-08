import Link from 'next/link';
import React from 'react';

const Button = ({ href, text }: { href: string; text: string }) => {
	return (
		<Link
			href={href}
			className='bg-yellow-600 p-2 text-black font-medium w-full text-center capitalize'>
			{text}
		</Link>
	);
};

export default Button;
