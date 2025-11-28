import type { Metadata } from "next";
// Assurez-vous d'importer la police que vous souhaitez utiliser
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

// Initialisation de la police (exemple avec Inter)
const inter = Inter({ subsets: ["latin"] });

// Métadonnées globales (pour le SEO)
export const metadata: Metadata = {
  title: "Taram Nusuk | Modèle Agence Hajj & Omra",
  description:
    "Modèle de plateforme web personnalisable pour les agences de voyage spécialisées dans le Hajj et l'Omra.",
};

/**
 * Le Root Layout doit obligatoirement inclure les balises <html> et <body>.
 * Il est le parent de tous les autres layouts.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
