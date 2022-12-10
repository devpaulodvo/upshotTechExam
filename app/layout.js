import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets:['latin'],
  weight:['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
