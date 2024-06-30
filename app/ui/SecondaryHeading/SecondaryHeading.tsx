import { montez } from "../fonts";
import { StyledSecondaryHeading } from "./style";

export const SecondaryHeading = ({ title }: { title: string }) => {
	return (
		<StyledSecondaryHeading className={montez.className}>
			{title}
		</StyledSecondaryHeading>
	);
};
