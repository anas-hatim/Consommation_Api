// Récupérer tous les posts (sans axios)
fetchPosts();

// Récupérer le post avec l'id 7 (avec Axios)
fetchPostById(7);

// Créer un nouveau post (avec Axios)
createPost();

// Mettre à jour le post avec l'id 7 (avec Axios)
updatePost(7);

// Mettre à jour le titre du post avec l'id 7 (avec Axios)
updatePostTitle(7, 'Nouveau titre');

// Supprimer le post avec l'id 7 (avec Axios)
deletePost(7);

// Fonction pour récupérer tous les posts
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log('Tous les posts :', data))
    .catch(error => console.error('Erreur lors de la récupération des posts :', error));
}

// Fonction pour récupérer un post par son id
function fetchPostById(id) {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => console.log('Post avec l\'id 7 :', response.data))
    .catch(error => console.error('Erreur lors de la récupération du post avec l\'id 7 :', error));
}

// Fonction pour créer un nouveau post
function createPost() {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Nouveau post',
      body: 'Contenu du nouveau post',
      userId: 1
    })
    .then(response => console.log('Nouveau post créé :', response.data))
    .catch(error => console.error('Erreur lors de la création du post :', error));
}

// Fonction pour mettre à jour un post par son id
function updatePost(id) {
  axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: 'Titre mis à jour',
      body: 'Contenu mis à jour',
      userId: 1
    })
    .then(response => console.log('Post mis à jour avec l\'id 7 :', response.data))
    .catch(error => console.error('Erreur lors de la mise à jour du post avec l\'id 7 :', error));
}

// Fonction pour mettre à jour le titre d'un post par son id
function updatePostTitle(id, newTitle) {
  axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: newTitle
    })
    .then(response => console.log('Titre du post avec l\'id 7 mis à jour :', response.data))
    .catch(error => console.error('Erreur lors de la mise à jour du titre du post avec l\'id 7 :', error));
}

// Fonction pour supprimer un post par son id
function deletePost(id) {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => console.log('Post avec l\'id 7 supprimé :', response.data))
    .catch(error => console.error('Erreur lors de la suppression du post avec l\'id 7 :', error));
}
