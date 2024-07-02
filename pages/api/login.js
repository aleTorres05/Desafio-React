// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = "https://desafiobackend-drfv.onrender.com";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const json = await response.json();
  return json.data.token;
}
