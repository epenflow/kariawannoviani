'use client';
import React, { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import PengantinCard from './PengantinCard';
import { FIRST_PAGE } from '../constants/text';
import { HiArrowNarrowDown } from 'react-icons/hi';
gsap.registerPlugin(ScrollTrigger, TextPlugin);
const FirstPage = ({
	params,
	containerRef,
	isActive,
}: {
	params: string;
	containerRef: RefObject<HTMLElement>;
	isActive: boolean;
}): React.JSX.Element => {
	const firstPageRef = React.useRef<HTMLDivElement>(null);
	const firstContentRef = React.useRef<HTMLDivElement>(null);
	const secondContentRef = React.useRef<HTMLParagraphElement>(null);
	const thirdContentRef = React.useRef<HTMLDivElement>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const pawiwahanRef = React.useRef<HTMLHeadingElement>(null);
	React.useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: thirdContentRef.current,
				scrub: true,
				pin: containerRef.current,
				start: 'top-=300 top',
			},
			defaults: {
				duration: 10,
			},
		});

		const ctx = gsap.context(() => {
			gsap.set(thirdContentRef.current, {
				clipPath: 'inset(50% 0%)',
				yPercent: 50,
			});
			gsap.set(pawiwahanRef.current, {
				yPercent: 50,
				autoAlpha: 0,
				clipPath: 'inset(50% 0%)',
			});
			tl.to(
				pawiwahanRef.current,
				{
					yPercent: 0,
					autoAlpha: 1,
					stagger: 1,
					clipPath: 'inset(0% 0%)',
				},
				1
			).to(
				thirdContentRef.current,
				{
					clipPath: 'inset(0% 0%)',
					yPercent: 0,
					delay: 1,
				},
				2
			);
		}, thirdContentRef);
		return () => {
			ctx.revert();
		};
	}, []);
	React.useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 2,
				stagger: 1,
			},
		});
		const ctx = gsap.context(() => {
			if (!isActive) {
				tl.from(
					firstContentRef.current,
					{
						clipPath: 'inset(50% 0%)',
					},
					1
				)
					.to(
						secondContentRef.current,
						{
							text: FIRST_PAGE.deskripsi,
							duration: 2,
						},
						1
					)
					.from(scrollRef.current, {
						clipPath: 'inset(0% 50%)',
					});
			}
		}, firstPageRef);
		return () => {
			ctx.kill();
		};
	}, [isActive]);
	return (
		<div
			className='h-screen gold-border p-2 flex flex-col gap-2'
			ref={firstPageRef}>
			<div
				className='first-content flex flex-col w-1/2'
				ref={firstContentRef}>
				<h1 className='capitalize text-lg'>{decodeURI(params)}</h1>
				<span className='h-[2px] w-auto block bg-yellow-600' />
			</div>
			<p
				className='capitalize text-justify first-content'
				ref={secondContentRef}></p>
			<div
				className='gold-border p-4 rounded-full flex flex-row justify-center items-center italic'
				ref={scrollRef}>
				<HiArrowNarrowDown size={25} />
				scroll kebawah untuk navigasi
			</div>
			<h1
				className='uppercase text-center font-bold text-4xl mt-5 mb-5'
				ref={pawiwahanRef}>
				pawiwahan
			</h1>
			<div
				className='flex justify-center items-center flex-col gap-2 first-content'
				ref={thirdContentRef}>
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
