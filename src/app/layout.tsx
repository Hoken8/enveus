import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enveus Gaming",
  description: "Enveus Gaming a MMO RPG Community for Ashes of Creation",
  //<meta http-equiv=”Permissions-Policy” content=”interest-cohort=()”>
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <PrimaryNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
