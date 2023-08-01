import React from "react";
import { HeaderBackground } from "./background";
import ProfileImage from '../../images/profile.png';

function Profile(): React.ReactElement {
	return (
		<div className="absolute flex-col justify-end bottom">
			<img src={ProfileImage} />
		</div>
	);
}
function ProfileName(): React.ReactElement {
	return (
		<div className="color-white">
			<span className="inline-block">TADJENING AURELIEN</span>
		</div>
	);
}
function ProfileTitle(): React.ReactElement {
	return (
		<div className="">
			<span>TADJENING AURELIEN</span>
		</div>
	);
}
function Description(): React.ReactElement {
	return (
		<div className="">
			<span>TADJENING AURELIEN</span>
		</div>
	);
}
export function Header(): React.ReactElement {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<HeaderBackground className="absolute w-full h-full top-0 left-0 -translate-x-1/2 "/>
			<div className="p-[8px] md:p-[32px] abosolute w-full h-full top-0 left-0 flex flex-col justify-end">
				<Profile />
				<ProfileName />
				<ProfileTitle />
				<Description />
			</div>
		</div>
	);
} 