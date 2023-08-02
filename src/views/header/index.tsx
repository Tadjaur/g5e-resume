import React from "react";
import { HeaderBackground } from "./background";
import ProfileImage from '../../media/images/profile.png';

function Profile(): React.ReactElement {
	return (
		<div className="content">
			<img src={ProfileImage} />
		</div>
	);
}
function ProfileName(): React.ReactElement {
	return (
		<div className="content">
			<span className="text-5xl">TADJENING AURELIEN</span>
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
export function Header(): React.ReactElement {
	return (
		<div className="relative w-full h-screen overflow-x-hidden">
			<HeaderBackground className="absolute content h-screen overflow-y-hidden top-0 left-1/2 -translate-x-1/2 "/>
			<div className="md:px-[10%] text-center md:text-start relative w-full h-[90vh] flex flex-col justify-end">
				<Profile />
				<ProfileName />
				<ProfileTitle />
				<Description />
			</div>
		</div>
	);
} 