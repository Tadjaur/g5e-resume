import React from "react";
import BackgroundJpg from '../../media/images/background.jpg'

export function HeaderBackground(props:React.ComponentProps<'div'>): React.ReactElement {
	const width = 1280, height= 720;
	const imageOverflowX = 65;
	const imageW = width + imageOverflowX, imageH = height;

	return (
			<div {...props}>
			<svg className="min-h-screen min-w-[100vw]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox={`0 0 ${width} ${height}`} fill="none">
			<path d={`M${imageOverflowX} 0H${imageW}V${imageH}H${imageOverflowX}V0Z`} fill="url(#pattern0)" />
			<path d={`M0 0H${width}V${height}H0V0Z`} fill="url(#paint0_radial_528_14)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_528_14" transform="matrix(0.000864702 0 0 0.00138889 -0.0534093 0)" />
				</pattern>
				<radialGradient id="paint0_radial_528_14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1028.5 330) rotate(89.1135) scale(517.062 1097.44)">
					<stop stop-color="#352D2D" stop-opacity="0.25" />
					<stop offset="0.666667" stop-color="#221C1C" />
				</radialGradient>
				<BgImage/>
			</defs>
		</svg>
			</div>
	);
}

function BgImage():React.ReactElement{
	return (
		<image id="image0_528_14" width="1280" height="720" xlinkHref={BackgroundJpg} />
	);
}
