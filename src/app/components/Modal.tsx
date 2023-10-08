'use client';
import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
const Modal = ({
	params,
	isActive,
	setActive,
}: {
	params: string;
	isActive: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const nameRef = React.useRef<HTMLHeadingElement>(null);
	const titleRef = React.useRef<HTMLHeadingElement>(null);
	const headerRef = React.useRef<HTMLElement>(null);
	const handleClick = () => {
		setActive((prev) => !prev);
	};
	React.useEffect(() => {
		document.body.style.overflowY = 'hidden';
		if (!isActive) {
			document.body.style.overflowY = 'unset';
		}
		return () => {
			document.body.style.overflowY = 'unset';
		};
	}, [isActive]);
	React.useLayoutEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				duration: 2,
			},
		});
		const ctx = gsap.context(() => {
			tl.fromTo(
				titleRef.current,
				{
					clipPath: 'inset(50% 0%)',
					yPercent: -100,
					autoAlpha: 0,
				},
				{
					clipPath: 'inset(0% 0%)',
					stagger: 2,
					autoAlpha: 1,
					yPercent: 1,
				},
				1
			).from(
				nameRef.current,
				{
					text: '',
				},
				2
			);
		}, headerRef);
		return () => {
			ctx.revert();
		};
	}, []);
	return isActive ? (
		<header
			className='fixed bg-black h-full w-full top-0 left-0 z-50 flex justify-center flex-col
       items-center text-yellow-600 p-4 gap-2 gold-border
       '
			ref={headerRef}>
			<h1
				className='uppercase text-6xl font-bold text-center'
				ref={titleRef}>
				maduang semara
			</h1>
			<h1 className='text-5xl font-bold text-center'>
				Kariawan <br /> & <br /> Noviani
			</h1>
			<h2 className='capitalize'>kepada yth. bapak/ibu/saudara/i</h2>
			<div className='w-full flex flex-col gap-4'>
				<span className='w-full h-[2px] bg-yellow-600 block' />
				<h1
					className='text-lg capitalize'
					ref={nameRef}>
					{decodeURI(params)}
				</h1>
				<span className='w-full h-[2px] bg-yellow-600 block' />
			</div>
			<h2 className='capitalize text-center'>
				mohon maaf apabila ada kesalahan <br /> nama/gelar
			</h2>
			<button
				onClick={() => handleClick()}
				className='bg-yellow-600 p-2 w-full text-black capitalize font-bold'>
				buka undangan
			</button>
		</header>
	) : null;
};

export default Modal;
