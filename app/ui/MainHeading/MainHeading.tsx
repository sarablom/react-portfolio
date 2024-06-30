import { StyledMainHeading } from "./style";

import { mono_fett } from "../fonts";

export const MainHeading = () => {
	return (
		<StyledMainHeading className={mono_fett.className}>
			Sara Blom<span>Frontend</span>
		</StyledMainHeading>
	);
};
