import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vercettiRegular = localFont({
  src: "./fonts/Vercetti-Regular.woff",
  variable: "--font-vercetti-regular",
  weight: "300 900",
});

const thunder = localFont({
  src: "./fonts/Thunder-VF.ttf",
  variable: "--font-thunder-vf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Evan Baron",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vercettiRegular.variable} ${thunder.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
