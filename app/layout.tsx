import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@/app/ui/global.css";
import { ThemeProvider, ThemeTypes } from "@/app/lib/context/ThemeContext";
import StyledComponentsRegistry from "@/app/lib/StyledComponentsRegistry";
import { museo_moderno } from "./ui/fonts";

export const metadata: Metadata = {
	title: "Sara Blom - Frontend Developer",
	description: "Frontend developer portfolio. Accessability, design.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const savedTheme = cookies().get("savedTheme");
	const theme = savedTheme?.value || "light";

	return (
		<html lang="en">
			<ThemeProvider initialTheme={theme as ThemeTypes}>
				<StyledComponentsRegistry>
					<body className={museo_moderno.className}>{children}</body>
				</StyledComponentsRegistry>
			</ThemeProvider>
		</html>
	);
}
