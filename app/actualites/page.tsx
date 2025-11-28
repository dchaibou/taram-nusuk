import { getAllArticles } from "@/utils/articles";
import Link from "next/link";
import Image from "next/image";

/**
 * Page affichant la liste de tous les articles de blog/actualités.
 * Cette page est générée statiquement à la construction.
 */
export default function ActualitesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-text-default mb-3">
          Actualités
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Restez informés des dernières mises à jour concernant les visas Hajj
          et Omra, les quotas, et les événements importants de la communauté.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/actualites/${article.slug}`}
            className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Carte d'article */}
            <div className="relative h-48 w-full">
              <Image
                src={article.image || "/images/blog/default.jpg"}
                alt={`Image pour ${article.title}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-5">
              <span className="text-sm text-gray-500 mb-2 block">
                {new Date(article.date).toLocaleDateString("fr-FR")}
              </span>
              <h2 className="text-xl font-bold text-text-default hover:text-primary mb-3 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <span className="text-primary font-semibold text-sm">
                Lire l&apos;article &rarr;
              </span>
            </div>
          </Link>
        ))}
      </section>

      {articles.length === 0 && (
        <p className="text-center text-lg text-gray-500 mt-12">
          Aucun article n&apos;a été publié pour le moment.
        </p>
      )}
    </div>
  );
}
