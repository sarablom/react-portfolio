"use client";
import Image from "next/image";
import styled from "styled-components";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { SingleWaveSvg } from "./components/SingleWaveSvg";
// import singlewaveSvg from "../../../../public/img/single-wave.svg";

export const SingleWaveBackground = () => {
	const { theme } = useTheme();
	return (
		// <div
		// 	style={{ backgroundImage: "url(../../../../public/img/single-wave.svg)" }}
		// >
		<ImageWrapper>
			<SingleWaveSvg fillColor={theme === "dark" ? "#0F0131" : "#30221D"} />
		</ImageWrapper>
		// </div>
	);
};

export const ImageWrapper = styled.div`
	position: relative;
	min-height: 300px;

	svg {
		object-fit: cover;
	}
`;

// overflow: hidden;
//   background-image: url("/static/media/header-primary.bb36ecc3aa0ff12dfc13d37382e1f1b3.svg");
//   width: 100%;
//   height: 150px;
//   background-size: cover;
//   background-position: center bottom;
