import PostCard from "../components/PostCard";

export default function PostList({ posts }) {
  return (
    <div className="w-full flex flex-wrap justify-evenly gap-12">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
