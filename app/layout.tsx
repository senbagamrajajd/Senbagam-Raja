import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dr. Senbagam Raja — IT Director | Psychologist | Advocate | Peace Envoy",
  description:
    "Official portfolio of Dr. Senbagam Raja — IT Director, Senior Counselling Psychologist, Supreme Court Advocate, Cyber Forensics Expert, and Global Peace Envoy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
