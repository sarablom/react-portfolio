"use client";
import Image from "next/image";
import styled from "styled-components";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { SingleWaveSvg } from "./components/SingleWaveSvg";

export const SingleWaveBackground = () => {
	const { theme } = useTheme();
	return (
		<ImageWrapper>
			<SingleWaveSvg fillColor={theme === "dark" ? "#0F0131" : "#30221D"} />
		</ImageWrapper>
	);
};

export const ImageWrapper = styled.div`
	position: relative;
	min-height: 300px;

	svg {
		object-fit: cover;
	}
`;
