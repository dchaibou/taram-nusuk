import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Page de Contact de l'Agence
 */
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-text-default mb-3">
          Contactez l&apos;Agence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nous sommes là pour vous aider à planifier votre Hajj ou Omra.
          Remplissez le formulaire ou utilisez les coordonnées ci-dessous.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Colonne 1: Formulaire de Contact */}
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-text-default mb-4">
            Envoyez-nous un Message
          </h2>
          <ContactForm />
        </div>

        {/* Colonne 2: Informations de Contact Statitques */}
        <div className="lg:order-1 space-y-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-text-default">
            Nos Coordonnées
          </h2>

          <div className="space-y-6">
            <ContactInfoItem
              icon={Mail}
              title="Email Principal"
              value="contact@agence-client.com"
              link="mailto:contact@agence-client.com"
            />
            <ContactInfoItem
              icon={Phone}
              title="Téléphone (Service Client)"
              value="+33 1 23 45 67 89"
              link="tel:+33123456789"
            />
            <ContactInfoItem
              icon={MapPin}
              title="Adresse du Siège"
              value="123 Rue de la Omra, 75000 Paris, France"
              link="https://maps.google.com/?q=Adresse+Client"
            />
          </div>

          {/* Carte (Placeholder pour l'intégration de Google Maps) */}
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            [Placeholder Google Maps/Localisation]
          </div>
        </div>
      </section>
    </div>
  );
}

// Composant utilitaire pour les infos de contact
const ContactInfoItem = ({ icon: Icon, title, value, link }: any) => (
  <div className="flex items-start">
    <Icon className="w-6 h-6 text-primary mt-1 shrink-0" />
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-text-default">{title}</h3>
      <a href={link} className="text-gray-600 hover:text-primary transition">
        {value}
      </a>
    </div>
  </div>
);
