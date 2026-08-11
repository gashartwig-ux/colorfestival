import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.colorfestival.com.ar"),
  title: "Color Festival | La Fiesta Color Más Grande de Argentina",
  description: "Viví Color Festival en Gualeguaychú: música, sunset, amigos, verano y color. Conocé la experiencia y enterate de la próxima edición.",
  keywords: ["Color Festival", "festival Gualeguaychú", "fiesta de verano", "Solar del Este", "festival Entre Ríos"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Color Festival | La Fiesta Color Más Grande de Argentina",
    description: "Música, sunset, amigos, verano y color frente al río en Gualeguaychú.",
    url: "/",
    siteName: "Color Festival",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/media/optimized/foto4.webp", width: 1200, height: 630, alt: "Color Festival en Gualeguaychú" }],
  },
  twitter: { card: "summary_large_image", title: "Color Festival", description: "La Fiesta Color Más Grande de Argentina", images: ["/media/optimized/foto4.webp"] },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Activar aquí Google Analytics 4 y Meta Pixel cuando existan identificadores reales. */}
        {children}
      </body>
    </html>
  );
}
