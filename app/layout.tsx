import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  description: "DevTools",
  title: "devTools",
  icons: {
    shortcut: "/assesst/Isotipo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
