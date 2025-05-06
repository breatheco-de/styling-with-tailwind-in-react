// index.js
import React from "react";
import ReactDOM from "react-dom";

const script = document.createElement("script");
script.src = "https://cdn.tailwindcss.com";
script.onload = () => {
	ReactDOM.render(<AdvancedTailwindComponent />, document.getElementById("myDiv"));
};
document.head.appendChild(script);

function AdvancedTailwindComponent() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-0">
			<button className="bg-green-400 hover:bg-green-500 focus:bg-green-700 text-white px-4 py-2 rounded transition-colors">Press me</button>
			<svg
				width={20}
				height={20}
				xmlns="http://www.w3.org/2000/svg"
				className="mt-6 w-12 h-12 text-green-600 animate-bounce"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
			</svg>
		</div>
	);
}
