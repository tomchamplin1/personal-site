import Navbar from "@/app/components/Navbar";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ThemeProvider } from "@/components/theme-provider";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tom Champlin",
  description: "Tom Champlin portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/img/favicon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <title>Tom Champlin</title>
        <meta name="description" content="Tom Champlin portfolio" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            {/* <Navbar /> */}
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
