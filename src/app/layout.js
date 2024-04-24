import { Roboto, Playfair } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const playfair = Playfair({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata = {
  title: "Sweethome",
  description: "Sweethome",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <title>Sweet Home</title>
      </head>
      <body className={roboto.className + " " + playfair.variable}>
        {children}
      </body>
    </html>
  );
}
