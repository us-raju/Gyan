import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Gyan",
  description: "Learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} antialiased`}>{children}</body>
    </html>
  );
}
