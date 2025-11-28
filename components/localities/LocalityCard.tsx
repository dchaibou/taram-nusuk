import { Locality } from "@/types";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";

interface LocalityCardProps {
  locality: Locality;
}

const LocalityCard: React.FC<LocalityCardProps> = ({ locality }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border-t-4 ${locality.color} overflow-hidden transition-shadow duration-300`}
    >
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={locality.imageUrl || "/images/localities/default.jpg"}
          alt={locality.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-3xl font-bold text-text-default">
            {locality.name}
          </h2>
          <span className="text-xl text-gray-500 italic">
            {locality.arabicName}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{locality.description}</p>

        {/* Points Clés */}
        <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
          <Star className="w-5 h-5 mr-2" /> Points d&apos;Intérêt Majeurs
        </h3>
        <ul className="space-y-1 text-gray-700 list-disc pl-5">
          {locality.keyPoints.map((point, index) => (
            <li key={index} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocalityCard;
