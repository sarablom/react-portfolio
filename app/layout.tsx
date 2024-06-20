import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import "@/app/ui/global.css";
import { ThemeProvider, ThemeTypes } from "@/app/lib/context/ThemeContext";
import StyledComponentsRegistry from "@/app/lib/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

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
					<body className={inter.className}>{children}</body>
				</StyledComponentsRegistry>
			</ThemeProvider>
		</html>
	);
}
