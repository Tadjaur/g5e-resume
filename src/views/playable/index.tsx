import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { PlayableBackground } from "./background";
import PromoVideo from "../../media/videos/promo.mp4";
import MarketBanner from "../../media/images/background.jpg";

function PlayButton({ className, onClick }: { onClick: (ev: unknown) => unknown, className: string }): React.ReactElement {
	return (
		<div className={className} onClick={onClick}>
			<svg className="max-w-[25vw] max-h-[25vh]" viewBox="0 0 274 254" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_529_72)" className="cursor-pointer">
					<ellipse cx="137" cy="127" rx="137" ry="126.5" fill="#FFFCFC" />
					<path d="M191.739 135.912L191.739 135.912L123.409 173.069C123.409 173.069 123.409 173.069 123.408 173.069C116.553 176.795 108.5 171.831 108.5 164.657V90.3426C108.5 83.1727 116.554 78.2056 123.409 81.9312L191.739 119.094L191.74 119.094C198.53 122.782 198.532 132.218 191.739 135.912ZM197.952 107.672L197.952 107.672L129.622 70.5147C129.621 70.5146 129.621 70.5145 129.621 70.5144C114.509 62.2918 95.5 72.8521 95.5 90.3426V164.657C95.5 182.155 114.51 192.702 129.621 184.486L129.621 184.486L197.952 147.328L197.952 147.328C213.794 138.712 213.794 116.288 197.952 107.672Z" fill="black" stroke="black" strokeWidth="5" />
				</g>
				<defs>
					<clipPath id="clip0_529_72">
						<rect width="274" height="253" fill="white" transform="translate(0 0.5)" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

function Presentation(props: { videoRef: React.MutableRefObject<HTMLVideoElement>, className: string }): React.ReactElement {
	const videoRef = props.videoRef;
	const [height, setHeight] = useState(window.screen.availHeight);

	const func = useCallback(() => {
		setHeight(window.innerHeight);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', func);
		return () => window.removeEventListener('resize', func)
	}, [])

	return (
		<div {...props}>
			<video ref={videoRef} poster={MarketBanner} height={`${height}px`} controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture preload={'auto'}>
				<source src={PromoVideo} type="video/mp4" />
			</video>
		</div>
	);
}
export function Playable(): React.ReactElement {
	const [playableState, setPlayableState] = useState<'idle' | 'presentation'>('idle');

	const videoRef = useRef<HTMLVideoElement | null>(null);
	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			videoRef.current.onended = ((ev) => {
				setPlayableState('idle');
			});
		}
	}, [videoRef]);

	const [that, setThat] = useState({ PlayButtonVisibility: 'visible', PlayableBackgroundState: 'visible' });
	useEffect(() => {
		switch (playableState) {
			case "idle":
				setThat({
					PlayButtonVisibility: 'visible',
					PlayableBackgroundState: 'opacity-100'
				});
				break;
			case "presentation":
				setThat({
					PlayButtonVisibility: 'invisible',
					PlayableBackgroundState: 'opacity-30'
				});
				break;
		}
	}, [playableState]);

	
	const clickAndPlay = useCallback(() => {
		setPlayableState('presentation');
		videoRef.current.play();
	}, [videoRef]);

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<Presentation videoRef={videoRef} className={`absolute content h-screen overflow-y-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
			<PlayableBackground className={`${that.PlayableBackgroundState} absolute content h-screen overflow-y-hidden top-0 left-1/2 -translate-x-1/2`} />
			<div className={`relative text-center w-full h-full flex flex-col align-center justify-center ${that.PlayButtonVisibility}`}>
				<PlayButton onClick={clickAndPlay} className="hover:scale-95 transition-all" />
			</div>
		</div>
	);
} 