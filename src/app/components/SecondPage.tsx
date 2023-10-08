'use client';
import React, { RefObject } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Button from './Button';
gsap.registerPlugin(ScrollTrigger);
const TimerNoSRR = dynamic(() => import('./Timer'), {
	ssr: false,
	suspense: false,
});
const SecondPage = ({
	containerRef,
}: {
	containerRef: RefObject<HTMLElement>;
}) => {
	const secondPageRef = React.useRef<HTMLDivElement>(null);
	const firstContentRef = React.useRef<HTMLDivElement>(null);
	const secondContentRef = React.useRef<HTMLDivElement>(null);
	React.useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: firstContentRef.current,
				scrub: true,
				pin: containerRef.current,
				start: () => 'top top',
			},
			defaults: {
				duration: 10,
				delay: 1,
			},
		});
		const ctx = gsap.context(() => {
			const content = gsap.utils.toArray('.second-content');
			gsap.set(firstContentRef.current, {
				yPercent: 100,
				autoAlpha: 0,
			});
			tl.to(
				firstContentRef.current,
				{
					yPercent: 0,
					autoAlpha: 1,
					stagger: 1,
				},
				1
			);
			gsap.set(content, {
				clipPath: 'inset(50% 0%)',
			});
			gsap.set(secondContentRef.current, {
				yPercent: 100,
				autoAlpha: 0,
			});
			content.forEach((element: any, index) => {
				tl.to(
					element,
					{
						clipPath: 'inset(0% 0%)',
						delay: index + 1,
					},
					1 + index
				);
			});
			tl.to(
				secondContentRef.current,
				{
					yPercent: 0,
					autoAlpha: 1,
				},
				11
			);
		}, secondPageRef);
		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<div
			className='p-2 flex justify-center items-center flex-col gold-border h-screen container-trigger gap-2'
			ref={secondPageRef}>
			<div
				className='capitalize gold-border p-4 rounded-t-full pt-20 text-center flex flex-col gap-2'
				ref={firstContentRef}>
				<h1 className='text-center text-4xl font-bold second-content'>
					save the date
				</h1>
				<h2 className='second-content'>jumat, 20 oktober 2023</h2>
				<h2 className='second-content'>15.00 wita / selesai</h2>
				<div className='gold-border flex flex-row capitalize items-center justify-center gap-4 text-center p-2 rounded-t-3xl'>
					<TimerNoSRR />
				</div>
				<Button
					href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Nzcxdmc1NmgxdTNzZ3A0aTBjN29pYWNuczggZXBlbmZsb3dAbQ&tmsrc=epenflow%40gmail.com'
					text='tambahkan ke kalender'
				/>
			</div>
			<div
				ref={secondContentRef}
				className='flex flex-col justify-center items-center gap-2 h-1/2 p-4'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14105.292425186162!2d115.3244222845018!3d-8.494513815872885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjknNDUuMSJTIDExNcKwMTknNTMuNiJF!5e0!3m2!1sid!2sid!4v1696659205046!5m2!1sid!2sid'
					loading='lazy'
					className='w-full h-full gold-border rounded-t-3xl'></iframe>
				<Button
					href={`https://www.google.com/maps/place/8%C2%B029'45.1%22S+115%C2%B019'53.6%22E/@-8.4958661,115.3315548,17z/data=!4m4!3m3!8m2!3d-8.4958661!4d115.3315548?hl=id`}
					text='lokasi upacara'
				/>
			</div>
		</div>
	);
};

export default SecondPage;
