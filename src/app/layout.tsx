import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import './styles/globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Bounce, ToastContainer } from "react-toastify";
import BackgroundStyles from "@/components/background-styles";
import AnimatedBackground from "@/components/animated-background";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learnova - Educational Platform",
  description: "An interactive educational platform to enhance learning experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased bg-background text-text-primary`}
      >
        <Providers>
          <Header />

          <main>
            <BackgroundStyles />
            <AnimatedBackground />
            {children}
          </main>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
