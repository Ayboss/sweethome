import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: [
    {
      path: "./../assets/helvetica/helvetica-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../assets/helvetica/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/helvetica/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../assets/helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../assets/helvetica/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

const playfair = localFont({
  src: [
    {
      path: "./../assets/playfair/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/playfair/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../assets/playfair/PlayfairDisplay-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../assets/playfair/PlayfairDisplay-BoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./../assets/playfair/PlayfairDisplay-Black.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../assets/playfair/PlayfairDisplay-BlackItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
});

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
      <body className={helvetica.className + " " + playfair.variable}>
        {children}
      </body>
    </html>
  );
}
