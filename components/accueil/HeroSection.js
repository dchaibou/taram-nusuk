// /components/accueil/HeroSection.js

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

            {/*  
        Placez ici l'image ou la vidéo de fond.
      */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-hajj.jpg')" }}>
                {/* Voile sombre pour améliorer la lisibilité du texte */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 p-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fadeInUp">
                    Votre Voyage Sacré Commence Ici.
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light">
                    Découvrez nos forfaits Hajj et Omra, conçus avec cœur et expertise pour une expérience inoubliable.
                </p>

                {/* Bouton principal (personnalisable via les variables SCSS/Tailwind) */}
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
                    Explorer les Forfaits
                </button>
            </div>
        </section>
    );
};

export default HeroSection;