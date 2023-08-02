import React from "react";
import { PlayableBackground } from "./background";

function PlayButton(): React.ReactElement {
	return (
		<div className="content">
			<svg className="max-w-[25vw] max-h-[25vh]" viewBox="0 0 274 254" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_529_72)" className="cursor-pointer">
					<ellipse cx="137" cy="127" rx="137" ry="126.5" fill="#FFFCFC" />
					<path d="M191.739 135.912L191.739 135.912L123.409 173.069C123.409 173.069 123.409 173.069 123.408 173.069C116.553 176.795 108.5 171.831 108.5 164.657V90.3426C108.5 83.1727 116.554 78.2056 123.409 81.9312L191.739 119.094L191.74 119.094C198.53 122.782 198.532 132.218 191.739 135.912ZM197.952 107.672L197.952 107.672L129.622 70.5147C129.621 70.5146 129.621 70.5145 129.621 70.5144C114.509 62.2918 95.5 72.8521 95.5 90.3426V164.657C95.5 182.155 114.51 192.702 129.621 184.486L129.621 184.486L197.952 147.328L197.952 147.328C213.794 138.712 213.794 116.288 197.952 107.672Z" fill="black" stroke="black" stroke-width="5" />
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
function ProfileTitle(): React.ReactElement {
	return (
		<div className="content">
			<span className="text-2xl">Software Developer</span>
		</div>
	);
}
function Description(): React.ReactElement {
	return (
		<div className="content">
			<span className="text-lg">Just trying to make a playable ads with pixijs for the G5 Entertainment</span>
		</div>
	);
}
export function Playable(): React.ReactElement {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<PlayableBackground className="absolute content h-screen overflow-y-hidden top-0 left-1/2 -translate-x-1/2 " />
			<div className="text-center relative w-full h-full flex flex-col align-center justify-center">
				<PlayButton />
			</div>
				<ProfileTitle />
				<Description />
		</div>
	);
} 