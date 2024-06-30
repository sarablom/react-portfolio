import { ThemeToggle } from "../ThemeToggle";
import { HeaderWrapper, NavWrapper, ListWrapper } from "./styles";

export const Header = () => {
	return (
		<HeaderWrapper>
			<NavWrapper>
				<ListWrapper>
					<li>Projekt</li>
					<li>Erfarenhet</li>
					<li>Kontakt</li>
					<li>Blogg</li>
				</ListWrapper>
				<ThemeToggle />
			</NavWrapper>
		</HeaderWrapper>
	);
};
