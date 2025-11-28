import { getAllArticles, getArticleBySlug } from "@/utils/articles";
import { Article } from "@/types";
import Image from "next/image";

/**
 * 1. Génération des Paramètres Statiques
 * Cette fonction est obligatoire pour le SSG dans une route dynamique.
 * Elle dit à Next.js : "Génère une page pour chacun de ces slugs".
 */
export async function generateStaticParams() {
  const articles = getAllArticles();

  // Retourne un tableau d'objets { slug: string }
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * 2. Composant de Page
 */
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    // Dans une application réelle, vous redirigeriez vers une page 404
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-red-600">Article Non Trouvé</h1>
        <p className="mt-4 text-lg text-gray-600">
          L&apos;actualité que vous recherchez n&apos;existe pas ou a été
          supprimée.
        </p>
      </div>
    );
  }

  // Affichage du contenu de l'article
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Image de Couverture */}
      <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={article.image || "/images/blog/default-large.jpg"}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Métadonnées */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-default mb-3">
          {article.title}
        </h1>
        <p className="text-lg text-gray-500">
          Par {article.author} | Publié le{" "}
          {new Date(article.date).toLocaleDateString("fr-FR")}
        </p>
      </div>

      {/* Contenu de l'Article (HTML rendu) */}
      <div
        className="prose max-w-none text-lg leading-relaxed text-gray-800"
        // DANGER: Inserer du HTML brut. Assurez-vous que votre source Markdown est fiable.
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Lien Retour */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <a
          href="/actualites"
          className="text-primary font-semibold hover:underline"
        >
          &larr; Retour aux actualités
        </a>
      </div>
    </article>
  );
}
