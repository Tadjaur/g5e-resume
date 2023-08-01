import React from 'react';
import { createRoot } from "react-dom/client";
import { Header } from './views/header';

export function App(): React.ReactElement {
	return (
		<>
			<Header />
		</>
	);
}

const rootNode = document.getElementById("root");

const root = createRoot(rootNode);

root.render(<App />);
