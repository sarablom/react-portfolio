"use client";
import Image from "next/image";
import styled from "styled-components";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { DoubleWaveSvgv } from "../components/DoubleWaveSvg";

export const DoubleWaveBackground = () => {
	const { theme } = useTheme();
	return (
		<ImageWrapper>
			<DoubleWaveSvgv
				fillColorAbove={theme === "dark" ? "#028AE5" : "#E86B24"}
				fillColorBelow={theme === "dark" ? "#01609F" : "#157124"}
			/>
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
