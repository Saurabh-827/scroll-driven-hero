import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scroll-Driven Hero | Smooth UI Motion",
  description:
    "A performant, scroll-linked hero section animation built with Next.js, Tailwind CSS, and GSAP.",
  icons: {
    icon: "https://itzfizz.com/wp-content/uploads/2024/07/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
