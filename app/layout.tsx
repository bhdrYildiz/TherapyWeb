import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emine Kıyga",
  description: "Klinik Psikolog Emine Kıyga",
  icons: {
    icon: [
      { url: "/TerapiLogo.ico", sizes: "any" },
      { url: "/TerapiLogo.ico", type: "image/x-icon" },
    ],
    shortcut: "/TerapiLogo.ico",
    apple: "/TerapiLogo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17725402378"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17725402378');
      `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveNavbar />
        {children}
        <Footer />
        <WhatsappButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
