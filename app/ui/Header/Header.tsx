import { ThemeToggle } from "../ThemeToggle";
import { X as Close, Menu } from "react-feather";

import {
	HeaderWrapper,
	NavWrapper,
	ListWrapper,
	MobileMenuWrapper,
} from "./styles";

export const Header = () => {
	return (
		<HeaderWrapper>
			<NavWrapper>
				<ListWrapper id="menu">
					<li>
						<a href="#" aria-label="Close menu">
							<Close />
						</a>
					</li>
					<li>
						<a href="#experience">Erfarenhet</a>
					</li>
					<li>
						<a href="#project">Projekt</a>
					</li>
					<li>
						<a href="#contact">Kontakt</a>
					</li>
					<li>
						<a href="#blog">Blogg</a>
					</li>
				</ListWrapper>
				<MobileMenuWrapper>
					<ThemeToggle />
					<a className="hamburger" href="#menu" aria-label="Open menu">
						<Menu />
					</a>
				</MobileMenuWrapper>
			</NavWrapper>
		</HeaderWrapper>
	);
};
