import React from 'react';
import { createRoot } from "react-dom/client";

export function App(): React.ReactElement {
	return (
		<>
			<h1>Hello world!</h1>
			<h2>Tip: Check your console</h2>
		</>
	);
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
