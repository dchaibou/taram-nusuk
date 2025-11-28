import { Package } from '@/types';

export const packagesData: Package[] = [
    {
        id: 'omra-eco-1',
        title: 'Omra Économique Printemps',
        type: 'Omra',
        price: 1599,
        duration: '10 Jours / 9 Nuits',
        destination: 'Mecca',
        features: ['Hébergement 3 étoiles (Mecca)', 'Vol avec escale', 'Transferts inclus'],
        isFeatured: true,
        imageUrl: '/images/omra-economique.jpg',
    },
    {
        id: 'hajj-premium-2',
        title: 'Hajj Prestige 5 Étoiles',
        type: 'Hajj',
        price: 7999,
        duration: '21 Jours / 20 Nuits',
        destination: 'Mecca & Medina',
        features: ['Hôtel 5 étoiles (Proximité Haram)', 'Vol direct', 'Encadrement par Imam'],
        isFeatured: true,
        imageUrl: '/images/hajj-prestige.jpg',
    },
    {
        id: 'omra-ramadhan-3',
        title: 'Omra Ramadhan (20 jours)',
        type: 'Omra',
        price: 3800,
        duration: '20 Jours / 19 Nuits',
        destination: 'Mecca & Medina',
        features: ['Hébergement 4 étoiles', 'Suhur inclus', 'Visites (Ziyarates)'],
        isFeatured: false,
        imageUrl: '/images/omra-ramadan.jpg',
    },
];