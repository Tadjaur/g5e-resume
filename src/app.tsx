import React from 'react';
import { createRoot } from "react-dom/client";
import { Header } from './views/header';
import { Playable } from './views/playable';
import { Footer } from './views/footer';

export function App(): React.ReactElement {
	return (
		<>
			<Header />
			<Playable />
			<Footer />
		</>
	);
}

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);

root.render(<App />);
