import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mário Baldé",
  description: "My personal journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
      <body>{children}</body>
    </html>
  );
}
