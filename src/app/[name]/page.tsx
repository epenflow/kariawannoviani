'use client';
import React from 'react';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import Modal from '../components/Modal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
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
				className='bg-black text-yellow-600 overflow-y-clip gold-border'
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
