const API_URL = "http://localhost:8080/api/posts";

export const getAllPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to get posts");
  return await response.json();
};

export const createPost = async (post: Post) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to create post");
  return await response.json();
};
