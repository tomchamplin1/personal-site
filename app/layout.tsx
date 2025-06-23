import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "@/components/theme-provider";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tom Champlin",
  description: "Tom Champlin portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
