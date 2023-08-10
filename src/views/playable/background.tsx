import React from "react";


export function PlayableBackground(props: { className: string }): React.ReactElement {
	const width = 1280, height = 827;//720;
	const imageOverflowY = 54;
	const imageW = width, imageH = height - imageOverflowY;

	return (
		<div {...props}>
			<svg className="min-h-screen min-w-[100vw]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} fill="none">
				<rect width={imageW} height={imageH} fill="url(#paint_radial_549_34)" />
				<defs>
					<radialGradient id="paint_radial_549_34" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(640 413.5) rotate(90) scale(413.5 640)">
						<stop stopColor="white" stopOpacity="0.16" />
						<stop offset="0.744792" stopColor="#FFFDFD" stopOpacity="0.83" />
						<stop offset="1" stopColor="#FFFCFC" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
}

