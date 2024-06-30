import type { Metadata } from "next";
import { cookies } from "next/headers";
import { MuseoModerno } from "next/font/google";
import "@/app/ui/global.css";
import { ThemeProvider, ThemeTypes } from "@/app/lib/context/ThemeContext";
import StyledComponentsRegistry from "@/app/lib/StyledComponentsRegistry";

const museoModerno = MuseoModerno({ subsets: ["latin"] });

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
					<body className={museoModerno.className}>{children}</body>
				</StyledComponentsRegistry>
			</ThemeProvider>
		</html>
	);
}
