import React from "react";

export const DoubleWaveSvgv = ({
	fillColorAbove = "#E86B24",
	fillColorBelow = "#157124",
}: {
	fillColorAbove: string;
	fillColorBelow: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1728"
			height="626"
			fill="none"
			viewBox="0 0 1728 626"
		>
			<g clipPath="url(#clip0_210_61)">
				<path
					fill={fillColorAbove}
					d="M0 438.2l57.6 20.932c57.6 20.149 172.8 63.187 288 83.336C460.8 563.4 576 563.4 691.2 469.5c115.2-93.9 230.4-281.7 345.6-302.632 115.2-20.149 230.4 124.613 345.6 156.5 115.2 30.713 230.4-51.449 288-93.9L1728 187.8V626H0V438.2z"
				></path>
				<g clipPath="url(#clip1_210_61)">
					<path
						fill={fillColorBelow}
						d="M1728 299.613l-57.6 6.757c-57.6 7.267-172.8 20.017-288 68.083-115.2 47.555-230.4 129.152-345.6 115.51-115.2-13.132-230.4-122.778-345.6-183.593-115.2-61.58-230.4-74.329-345.6-33.913-115.2 41.18-230.4 135.527-288 183.592L0 503.605V626h1728V299.613z"
					></path>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_210_61">
					<path fill="#fff" d="M0 0H1728V626H0z"></path>
				</clipPath>
				<clipPath id="clip1_210_61">
					<path
						fill="#fff"
						d="M0 0H1728V407.984H0z"
						transform="matrix(-1 0 0 1 1728 218.016)"
					></path>
				</clipPath>
			</defs>
		</svg>
	);
};
