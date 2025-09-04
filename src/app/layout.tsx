import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANPEPP - Associação Nacional de Pesquisa e Pós-graduação em Psicologia",
  description: "A ANPEPP é uma organização sem fins lucrativos e apartidária fundada em 1983, que tem por objetivo congregar programas de pós-graduação vinculados a instituições de ensino superior para fomentar e estimular a formação de profissionais para pesquisa e pós-graduação em Psicologia.",
  keywords: "ANPEPP, Psicologia, Pós-graduação, Pesquisa, Associação, PPG, Grupos de Trabalho",
  authors: [{ name: "ANPEPP" }],
  openGraph: {
    title: "ANPEPP - Associação Nacional de Pesquisa e Pós-graduação em Psicologia",
    description: "Organização que congrega programas de pós-graduação em Psicologia no Brasil",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
