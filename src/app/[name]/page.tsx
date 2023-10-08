'use client';
import React from 'react';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import Modal from '../components/Modal';

export default function Page({ params }: { params: { name: string } }) {
	const containerRef = React.useRef<HTMLElement>(null);
	const [isActive, setActive] = React.useState<boolean>(true);
	return (
		<React.Fragment>
			<Modal
				params={params.name}
				isActive={isActive}
				setActive={setActive}
			/>
			<main
				className='p-4 bg-black text-yellow-600 '
				ref={containerRef}>
				<FirstPage
					params={params.name}
					containerRef={containerRef}
					isActive={isActive}
				/>
				<SecondPage containerRef={containerRef} />
			</main>
		</React.Fragment>
	);
}
