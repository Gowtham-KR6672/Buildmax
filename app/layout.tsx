import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Max | AI-Powered Sustainable Luxury Homes in Chennai",
  description:
    "Discover Chennai's first AI-powered sustainable luxury homes by Build Max Infrastructure Private Limited. Premium, eco-friendly, secure and future-ready living across OMR, ECR and GST Road.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
