import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";
import PostCard from "../components/PostCard";
import type { Post } from "../types/post";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
