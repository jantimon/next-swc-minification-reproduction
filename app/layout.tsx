import type { Metadata } from "next";
import { getNextVersion } from "./next-version";

export const metadata: Metadata = {
  title: getNextVersion(),
  description: "reproduction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
