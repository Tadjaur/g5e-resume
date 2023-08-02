import React from "react";

function Title(): React.ReactElement {
	return (
		<div className="content">
			<span className="text-5xl">Acknowledgment</span>
		</div>
	);
}

function Link({ href, children }: { href: string, children: React.ReactNode }): React.ReactElement {
	return (<a className="text-[#fffa] no-underline" href={href}>{children}</a>);
}

function WorkingStack({ className }: { className: string }): React.ReactElement {
	return (
		<div className={className}>
			<span className="text-3xl">Working stack</span>
			<span className="text-lg">Engine: <Link href="https://pixijs.io">pixi.js</Link></span>
			<span className="text-lg">Bundler: <Link href="https://webpack.js.org">webpack</Link></span>
			<span className="text-lg">Website tech: <Link href="https://">html5, jsx(React.js)</Link></span>
			<span className="text-lg">Design Software: <Link href="https://figma.com">figma</Link></span>
			<span className="text-lg">CSS framework: <Link href="https://tailwindcss.com">tailwindcss</Link></span>
			<span className="text-lg">Version Control System: <Link href="https://git-scm.com">git</Link></span>
		</div>
	);
}

function SomeLinks(): React.ReactElement {
	return (
		<div className="flex flex-col gap-[inherit]">
			<span className="text-3xl">Some Links</span>
			<span className="text-lg">Developer linkedin: <Link href="https://linkedin.com/in/tadjaur">in/tadjaur</Link></span>
			<span className="text-lg">Git project: <Link href="https://github.com/tadjaur/try_pixi">tadjaur/try_pixi</Link></span>
			<span className="text-lg">Figma: <Link href="https://www.youtube.com/@g5games">youtube.com/@g5games</Link></span>
		</div>
	);
}

function Resources(): React.ReactElement {
	return (
		<div className="flex flex-col gap-[inherit]">
			<span className="text-3xl">Resources</span>
			<span className="text-lg">Movie: <Link href="https://www.youtube.com/@g5games">youtube.com/@g5games</Link></span>
			<span className="text-lg">Playstore: <Link href="https://play.google.com/store/apps/details?id=com.g5e.sherlock.android">com.g5e.sherlock.android</Link></span>
		</div>
	);
}
function HTagMessage(): React.ReactElement {
	return (
		<div className="content">
			<span className="text-lg">This wesite was made for learning purpose.</span>
		</div>
	);
}
export function Footer(): React.ReactElement {
	return (
		<div className="text-center relative w-full pt-[80px] pb-[20px] gap-12 min-h-screen overflow-x-hidden bg-[#221C1C] flex flex-col justify-between">
			<Title />
			<div className="flex flex-row align-center justify-center gap-12">
				<WorkingStack className="flex flex-col text-end gap-5" />
				<div className="flex flex-col text-start gap-5">
					<SomeLinks />
					<Resources />
				</div>
			</div>
			<HTagMessage />
		</div>
	);
} 