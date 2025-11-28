import { Locality } from '@/types';

export const localitiesData: Locality[] = [
    {
        id: 'makkah',
        name: 'La Mecque',
        arabicName: 'مَكَّةُ الْمُكَرَّمَةُ',
        description: 'La ville la plus sacrée de l\'Islam et le lieu de la Kaaba. Elle est le point focal du Hajj et de l\'Omra et le lieu de naissance du Prophète Muhammad (PSL).',
        keyPoints: [
            'Grande Mosquée (Masjid al-Haram)',
            'La Kaaba (Qibla du monde)',
            'Mont Hira et la Grotte de Hira',
            'Sources de Zamzam'
        ],
        imageUrl: '/images/localities/makkah.jpg',
        color: 'border-amber-500', // Couleur pour Tailwind CSS
    },
    {
        id: 'madinah',
        name: 'Médine',
        arabicName: 'الْمَدِينَةُ الْمُنَوَّرَةُ',
        description: 'Connue comme "La Ville Illuminée", Médine est la deuxième ville sainte et la destination de l\'Hégire (migration) du Prophète, où il est enterré.',
        keyPoints: [
            'Mosquée du Prophète (Al-Masjid an-Nabawi)',
            'La Tombe du Prophète (PSL)',
            'Mosquée de Quba (première mosquée de l\'Islam)',
            'Cimetière de Jannat al-Baqi'
        ],
        imageUrl: '/images/localities/madinah.jpg',
        color: 'border-green-600',
    },
];