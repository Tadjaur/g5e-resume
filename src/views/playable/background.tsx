import React from "react";
import BackgroundJpg from '../../media/images/background.jpg'

export function PlayableBackground(props: React.ComponentProps<'div'>): React.ReactElement {
	const width = 1280, height = 827;//720;
	const imageOverflowX = 54;
	const imageW = width, imageH = height - imageOverflowX;

	return (
		<div {...props}>
			<svg className="min-h-screen min-w-[100vw]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} fill="none">
				<path d={`M0 ${imageOverflowX}H${imageW}V${imageH}H0V${imageOverflowX}Z`} fill="url(#pattern0)" />
				<path d={`M0 0H${width}V${height}H0V0Z`} fill="url(#paint0_radial_549_34)" />
				<defs>
					<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlinkHref="#image0_549_34" transform="matrix(0.000897352 0 0 0.00138889 -0.0743056 0)" />
					</pattern>
					<radialGradient id="paint0_radial_549_34" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(640 413.5) rotate(90) scale(413.5 640)">
						<stop stop-color="white" stop-opacity="0.16" />
						<stop offset="0.744792" stop-color="#FFFDFD" stop-opacity="0.83" />
						<stop offset="1" stop-color="#FFFCFC" />
					</radialGradient>
					<BgImage />
				</defs>
			</svg>
		</div>
	);
}

function BgImage(): React.ReactElement {
	return (
		<image id="image0_528_14" width="1280" height="720" xlinkHref={BackgroundJpg} />
	);
}

