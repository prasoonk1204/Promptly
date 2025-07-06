import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Promptly.ai",
  description: "Your Shortcut to Powerful Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={` antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}