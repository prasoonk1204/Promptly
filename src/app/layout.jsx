import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <meta property="og:title" content="Promptly.ai" />
        <meta property="og:description" content="Ai Prompt Enhancer" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/kenma/promptly-og.png?updatedAt=1754655475905"
        />
        <meta property="og:url" content="https://promptlyai-kenma.vercel.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Promptly.ai" />
        <meta name="twitter:description" content="Ai Prompt Enhancer" />
        <meta name="twitter:image" content="https://ik.imagekit.io/kenma/promptly-og.png?updatedAt=1754655475905" />
        <meta name="twitter:url" content="https://promptlyai-kenma.vercel.app" />
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
