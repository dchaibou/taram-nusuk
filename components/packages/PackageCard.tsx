import { Package } from "@/types";
import Image from "next/image";
import { Check, Plane, Clock } from "lucide-react";

// Composant icône Lucide-React non-standard
const FeatureIcon = ({
  icon: Icon,
  text,
}: {
  icon: React.FC<any>;
  text: string;
}) => (
  <span className="flex items-center text-sm text-gray-700">
    <Icon className="w-4 h-4 mr-2 text-primary" />
    {text}
  </span>
);

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Image du Forfait */}
      <div className="relative h-48 w-full">
        {/* Utilisation de next/image pour l'optimisation */}
        <Image
          src={pkg.imageUrl || "/images/default-package.jpg"}
          alt={`Image du forfait ${pkg.title}`}
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Badge Type (Hajj/Omra) */}
        <span
          className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white ${
            pkg.type === "Hajj" ? "bg-secondary" : "bg-primary"
          }`}
        >
          {pkg.type}
        </span>
      </div>

      <div className="p-5">
        {/* Titre et Prix */}
        <h3 className="text-xl font-bold text-text-default mb-2 hover:text-primary transition">
          <a href={`/services/${pkg.id}`}>{pkg.title}</a>
        </h3>

        <p className="text-3xl font-extrabold text-primary mb-4">
          {pkg.price.toLocaleString("fr-FR")} €
          <span className="text-sm font-normal text-gray-500">
            {" "}
            / par personne
          </span>
        </p>

        {/* Détails Clés */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4 border-t border-b py-2">
          <FeatureIcon icon={Clock} text={pkg.duration} />
          <FeatureIcon
            icon={Plane}
            text={
              pkg.destination === "Mecca & Medina"
                ? "2 Villes"
                : "Mecca Seulement"
            }
          />
        </div>

        {/* Liste des Caractéristiques */}
        <ul className="space-y-1 mb-6">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 mr-2 text-primary/70" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Bouton d'Action */}
        <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition duration-150">
          Demander un Devis
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
