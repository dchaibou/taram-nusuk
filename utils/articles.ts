import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Article } from '@/types';

// Chemin vers le dossier des articles
const articlesDirectory = path.join(process.cwd(), 'data/articles');

/**
 * Récupère tous les articles du dossier articlesDirectory.
 * @returns {Article[]} Une liste d'objets Article.
 */
export function getAllArticles(): Article[] {
    const fileNames = fs.readdirSync(articlesDirectory);

    const allArticles = fileNames.map((fileName) => {
        // 1. Lire le contenu brut du fichier
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // 2. Utiliser gray-matter pour séparer le front matter (data) et le contenu (content)
        const { data, content } = matter(fileContents);

        // 3. Convertir le contenu Markdown en HTML
        const htmlContent = marked(content);

        // 4. Construire l'objet Article typé
        return {
            slug: data.slug || fileName.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            author: data.author,
            excerpt: data.excerpt,
            image: data.image,
            content: htmlContent,
        } as Article; // Assertion de type
    }).sort((a, b) => {
        // Triez les articles par date, le plus récent en premier
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return allArticles;
}

/**
 * Récupère un seul article par son slug.
 * @param {string} slug - Le slug de l'article (ex: 'reglementation-hajj-2026').
 * @returns {Article | undefined} L'objet Article ou undefined s'il n'est pas trouvé.
 */
export function getArticleBySlug(slug: string): Article | undefined {
    const allArticles = getAllArticles();
    return allArticles.find((article) => article.slug === slug);
}