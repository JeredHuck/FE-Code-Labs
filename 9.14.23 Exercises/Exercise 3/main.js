async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  try {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  } catch (error) {
    console.log('ERROR', error);
  }
}

fetchPosts();