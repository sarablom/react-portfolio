"use client";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
	width: 100%;
`;

export const NavWrapper = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 16px;
`;

export const ListWrapper = styled.ol`
	display: flex;
	list-style-type: none;
	gap: 32px;
	text-transform: uppercase;
	transform: translateY(-200%);
	transition: transform 0.2s ease;

	&:target {
		position: absolute;
		inset: 0;
		z-index: 1;
		flex-direction: column;
		align-items: flex-end;
		background: var(--color-background);
		padding: 16px;
		transform: translateY(0);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export const MobileMenuWrapper = styled.div`
	display: flex;
	gap: 16px;
`;
