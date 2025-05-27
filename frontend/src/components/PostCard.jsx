export default function PostCard({ post }) {
  return (
    <div className="w-[350px] rounded-4xl border border-gray-300 p-3 cursor-pointer">
      <img className="w-full h-[300px] rounded-3xl object-cover" src={post.imageURL} alt={post.title} />
      <div className="px-2 py-4">
        <h2 className="mb-2 font-semibold text-2xl">{post.title}</h2>
        <p className="text-gray-500">{post.description}</p>
      </div>
    </div>
  );
}
