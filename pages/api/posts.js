const API_URL = "https://desafiobackend-drfv.onrender.com";

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`, {
    method: "GET",
  });
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzVlODkzODNlNjNmNTVmNmJhMDdlMSIsImlhdCI6MTcyMDEwNDYxMywiZXhwIjoxNzIwMTkxMDEzfQ.4rC4pwf3m48TPHDB6IjK9VuBsfip4xznHMTaM74Wy28
  const json = await response.json();
  return json.data.posts;
}
