import Link from "next/link";
import { navigationLinks } from "@/data/navData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Section 1: Logo et Description */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Taram Nusuk
            </h3>
            <p className="text-sm text-gray-400">
              Votre partenaire de confiance pour des voyages de Hajj et Omra sur
              mesure.
            </p>
          </div>

          {/* Section 2: Liens Rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-150 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Informations Pratiques */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Infos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-white"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact (Placeholder) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              Nous Contacter
            </h4>
            <p className="text-sm text-gray-400">
              Email : contact@agence.com
              <br />
              Téléphone : +33 1 23 45 67 89
              <br />
              Adresse : 123 Rue de la Mecque
            </p>
          </div>
        </div>

        {/* Droits d'Auteur */}
        <div className="text-center text-sm text-gray-500 pt-4">
          &copy; {currentYear} Taram Nusuk - Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
