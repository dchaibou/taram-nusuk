# Taram Nusuk (Modèle de Base)

Modèle de plateforme web personnalisable pour les agences de voyage spécialisées dans le Hajj et l'Omra.

## Description du projet

**Taram Nusuk** constitue le modèle de base pour notre solution B2B. Ce dépôt ne représente pas un site finalisé, mais plutôt un kit de démarrage robuste, qui sera dupliqué pour chaque nouveau client. Chaque branche deviendra le site web personnalisé d'une agence, permettant des ajustements spécifiques (telles que les palettes de couleurs, logos, et contenus) selon les besoins particuliers de chaque client. L'architecture du modèle est conçue pour faciliter une personnalisation rapide et efficace.

## Architecture et structure

Le modèle couvre toutes les sections essentielles d’un site d'agence de voyage :

* **/accueil** : Page d’accueil principale, mettant en avant les offres.
* **/services** : Section détaillant les forfaits Hajj et Omra.
* **/actualites** : Blog et informations sur les mises à jour réglementaires.
* **/galerie** : Espace visuel inspirant pour les pèlerins.
* **/localites** : Informations pratiques sur La Mecque, Médine et autres lieux saints.
* **/contact** : Formulaires et informations de contact.

## Fonctionnalités principales du modèle

* **Structure modulaire** : Permet de réutiliser et remplacer facilement les composants.
* **Personnalisation rapide (Post-Fork)** : Variables CSS/SCSS prédéfinies pour un changement de thème rapide.
* **Contenu de type placeholder** : Des éléments de contenu par défaut faciles à remplacer par les informations du client.
* **Design responsive** : Optimisation pour tous les types d'appareils (mobiles, tablettes, ordinateurs).

## Méthodologie de travail (Workflow Dev/Client)

* **Dépôt principal (main)** : Ce dépôt sert de référence principale et reçoit toutes les mises à jour structurelles.
* **Création du site client (nouvelle branche)** : À chaque nouvelle agence (ex : AgenceAlMadina), une nouvelle branche est créée à partir de ce modèle.
* **Ajustements spécifiques au client** : Les personnalisations (branding, couleurs, contenu) se font uniquement dans la branche dédiée au client.

## Technologies utilisées

Liste des technologies principales utilisées pour ce modèle (par exemple : React, Node.js, Tailwind CSS, etc.)

## Installation et utilisation (pour les développeurs)

### Prérequis

Avant de commencer, assurez-vous d’avoir installé les éléments suivants :

```
Node.js (version 22 ou supérieure)
Git
```

### Étapes d'installation

#### 1. Cloner le dépôt

```bash
git clone https://github.com/dchaibou/taram-nusuk.git
```

#### 2. Naviguer vers le répertoire du projet

```bash
cd taram-nusuk
```

#### 3. Installer les dépendances

```bash
npm install
```

### Lancer le projet

```bash
npm run dev
# ou
pnpm dev
```

Le projet sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000).

## Contact

Pour toute question ou demande d’informations supplémentaires, n’hésitez pas à contacter l’équipe de développement.
