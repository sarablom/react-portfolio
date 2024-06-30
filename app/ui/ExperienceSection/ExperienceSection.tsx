import { SecondaryHeading } from "../Headings/SecondaryHeading";
import { SectionWrapper } from "./style";
import { SingleWaveBackground } from "../BackgroundImages/SingleWaveBackground";

export const ExperienceSection = () => {
	return (
		<SectionWrapper>
			<SingleWaveBackground />
			<SecondaryHeading title="Erfarenhet" />
		</SectionWrapper>
	);
};
