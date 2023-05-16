# Mon Projet JavaScript

Ce projet est une application JavaScript qui utilise l'API JSONPlaceholder pour effectuer différentes opérations sur les posts.

## Description

Ce projet consiste à créer une application JavaScript qui interagit avec l'API JSONPlaceholder pour réaliser les actions suivantes :

- Récupérer tous les posts disponibles.
- Récupérer un post spécifique en utilisant son identifiant.
- Créer un nouveau post.
- Mettre à jour un post existant.
- Mettre à jour le titre d'un post.
- Supprimer un post.

Chaque action utilise soit la fonction fetch native de JavaScript, soit la bibliothèque Axios pour effectuer les requêtes HTTP.

## Installation

1. Clonez ce repository sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé.
3. Exécutez `npm install` pour installer les dépendances.

## Utilisation

1. Ouvrez le fichier `application.js` dans votre éditeur de code.
2. Exécutez le fichier avec Node.js en utilisant la commande `node application.js`.
3. Ouvrez la console pour afficher les résultats des différentes requêtes.

## Exemples de Code

```javascript
// Récupérer tous les posts
fetchPosts();

// Récupérer le post avec l'id 7
fetchPostById(7);

// Créer un nouveau post
createPost();

// Mettre à jour le post avec l'id 7
updatePost(7);

// Mettre à jour le titre du post avec l'id 7
updatePostTitle(7, 'Nouveau titre');

// Supprimer le post avec l'id 7
deletePost(7);
