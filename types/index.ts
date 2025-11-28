/**
 * Interface pour les éléments de navigation (restons simple)
 */
export interface NavLink {
    label: string;
    href: string;
}

/**
 * Définit la structure d'un Forfait Hajj/Omra
 */
export interface Package {
    id: string;
    title: string;
    type: 'Hajj' | 'Omra'; // Type de pèlerinage
    price: number; // Prix de base
    duration: string; // Ex: "10 Jours / 9 Nuits"
    destination: 'Mecca' | 'Mecca & Medina'; // Destinations incluses
    features: string[]; // Points clés du forfait (Ex: "Vol direct", "Hôtel 4*")
    isFeatured: boolean; // Pour l'affichage sur la page d'accueil
    imageUrl: string; // Chemin de l'image (pour le composant)
}

/**
 * Définit la structure d'un Article de Blog/Actualité
 */
export interface Article {
    slug: string; // Utilisé dans l'URL (ex: /actualites/reglementation-hajj-2026)
    title: string;
    date: string; // Format 'YYYY-MM-DD'
    author: string;
    excerpt: string;
    image: string;
    content: string; // Le contenu HTML converti depuis Markdown
}

/**
 * Définit la structure d'un élément de la galerie
 */
export interface GalleryItem {
    id: string;
    src: string; // Chemin vers l'image dans /public
    alt: string;
    caption: string; // Description ou lieu
    category: 'Hajj' | 'Omra' | 'Medina' | 'Makkah' | 'Divers';
}

/**
 * Définit la structure des informations sur une Localité (Makkah, Madinah)
 */
export interface Locality {
    id: string;
    name: string;
    arabicName: string;
    description: string;
    keyPoints: string[]; // Faits importants pour le pèlerin
    imageUrl: string;
    color: string; // Couleur thématique (pour la carte)
}