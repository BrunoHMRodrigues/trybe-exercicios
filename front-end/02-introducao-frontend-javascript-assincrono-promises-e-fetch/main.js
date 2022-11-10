import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './util/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(`${USERS_API}`)
    .then((response) => response.json())
    .then((data) => {
        const {users} = data;
        fillUsersSelect(users);
    });

// faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
usersSelect.addEventListener('change', () => {
    clearPageData();

    fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
      .then((response) => response.json())
      .then((data) => {
          const { posts } = data;
          fillPosts(posts);
          
          const [featuredPost] = posts;
          const commentsAPI = `https://dummyjson.com/posts/${featuredPost.id}/comments`;
          return fetch(commentsAPI)
    })
      .then((result) => result.json())
      .then((comments) => fillFeaturedPostComments(comments.comments))
      .catch((error) => {
        fillErrorMessage('Erro ao recuperar informações');
        console.log(error.message);
      })
});



