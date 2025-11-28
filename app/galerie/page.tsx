"use client"; // Ce composant utilise l'état et l'interactivité

import { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";
import { GalleryItem } from "@/types";

const categories = ["Tous", "Makkah", "Medina", "Hajj", "Omra", "Divers"];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredItems = galleryData.filter(
    (item) => activeCategory === "Tous" || item.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-text-default mb-3">
          Notre Galerie Photo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Inspirez-vous des moments de spiritualité et de tranquillité vécus par
          nos pèlerins dans les lieux saints.
        </p>
      </header>

      {/* Barre de Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-200 ${
              activeCategory === cat
                ? "bg-primary text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de la Galerie */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <div className="w-full h-64">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Overlay d'information */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-white">
                <p className="font-semibold text-lg">{item.caption}</p>
                <span className="text-sm text-gray-300">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {filteredItems.length === 0 && (
        <p className="text-center text-lg text-gray-500 mt-12">
          Aucune image trouvée dans cette catégorie.
        </p>
      )}
    </div>
  );
}
