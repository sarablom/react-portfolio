import Image from "next/image";

import { SecondaryHeading } from "../SecondaryHeading";
import { SectionWrapper, ImageWrapper } from "./style";

export const ExperienceSection = () => {
	return (
		<SectionWrapper>
			<ImageWrapper>
				<Image src="/img/single-wave.svg" alt="" fill={true} />
			</ImageWrapper>
			<SecondaryHeading title="Erfarenhet" />
		</SectionWrapper>
	);
};
