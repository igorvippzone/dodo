import { Nunito } from "next/font/google";

import "./globals.css";

const nunitoFont = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<head>
				<link
					data-rh="true"
					href="/logo.png"
					rel="icon"
				/>
			</head>

			<body className={`${nunitoFont.className}`}>
				{children}
			</body>
		</html>
	);
}
