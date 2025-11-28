const HeroSection = () => {
  return (
    <section className="bg-primary-dark text-white text-center py-20 md:py-32 shadow-xl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Votre Pèlerinage Sacré commence ici
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Forfaits Hajj et Omra sur mesure pour une expérience inoubliable.
        </p>
        <button className="bg-white text-primary-dark font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
          Découvrez nos Offres
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
