'use client';
import React, { RefObject } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import PengantinCard from './PengantinCard';
import { FIRST_PAGE } from '../constants/text';
import { HiArrowNarrowDown } from 'react-icons/hi';
const FirstPage = ({
	params,
	containerRef,
	isActive,
}: {
	params: string;
	containerRef: RefObject<HTMLElement>;
	isActive: boolean;
}): React.JSX.Element => {
	const firstPage = React.useRef<HTMLDivElement>(null);
	const descRef = React.useRef<HTMLParagraphElement>(null);
	const firstContent = React.useRef<HTMLDivElement>(null);
	const secondContent = React.useRef<HTMLHeadingElement>(null);
	const thirdContent = React.useRef<HTMLDivElement>(null);
	React.useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, TextPlugin);
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: firstPage.current,
					start: 'top top',
					end: 'bottom top',
					pin: firstPage.current,
					scrub: true,
				},
			});
			tl.set(firstContent.current, {
				yPercent: 100,
				autoAlpha: 0,
			})
				.set(secondContent.current, {
					clipPath: 'inset(50% 0%)',
				})
				.to(
					secondContent.current,
					{
						clipPath: 'inset(0% 0%)',
					},
					1
				)
				.to(
					firstContent.current,
					{
						yPercent: 0,
						autoAlpha: 1,
					},
					2
				)
				.to(
					secondContent.current,
					{
						yPercent: -100,
						autoAlpha: 0,
					},
					3
				)
				.to(firstContent.current, {
					yPercent: -100,
					autoAlpha: 0,
				});

			if (!isActive) {
				gsap.from(descRef.current, {
					text: '',
					duration: 2.5,
					autoAlpha: 0,
				});
				gsap.from(thirdContent.current, {
					clipPath: 'inset(0% 50%)',
					duration: 2.5,
					delay: 1,
				});
			}
		}, firstPage);
		return () => ctx.revert();
	}, [isActive]);

	return (
		<div
			className='p-2 flex flex-col gap-2 h-screen '
			ref={firstPage}>
			<div className='first-content flex flex-col w-1/2'>
				<h1 className='capitalize text-lg'>{decodeURI(params)}</h1>
				<span className='h-[2px] w-auto block bg-yellow-600 z-30' />
			</div>
			<p
				className='capitalize text-justify first-content relative bg-black z-20'
				ref={descRef}>
				{FIRST_PAGE.deskripsi}
			</p>
			<div
				className='gold-border p-4 rounded-full flex flex-row justify-center items-center italic bg-black z-30'
				ref={thirdContent}>
				<HiArrowNarrowDown size={25} />
				scroll kebawah untuk navigasi
			</div>
			<h1
				className='uppercase text-center font-bold text-4xl mt-5 mb-5 relative'
				ref={secondContent}>
				pawiwahan
			</h1>
			<div
				className='flex justify-center items-center flex-col gap-2 first-content relative'
				ref={firstContent}>
				{FIRST_PAGE.pengantin.map((value, index) =>
					index === 0 ? (
						<PengantinCard
							key={index}
							{...value}
						/>
					) : (
						<React.Fragment key={index}>
							<h5>&</h5>
							<PengantinCard {...value} />
						</React.Fragment>
					)
				)}
			</div>
		</div>
	);
};

export default FirstPage;
