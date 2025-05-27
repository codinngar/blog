import { useState } from "react";
import { createPost } from "../api/posts";
import TextEditor from "../components/TextEditor";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !imageURL || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      const post = {
        title,
        description,
        imageURL,
        content,
      };
      await createPost(post);
      alert("Post submitted!");
      // Reset form
      setTitle("");
      setDescription("");
      setImageURL("");
      setContent("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Failed to submit: " + error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900e"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900e"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter post description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="image-url"
            className="block mb-2 text-sm font-medium text-gray-900e"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image-url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter header image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
        </div>
        <TextEditor content={content} setContent={setContent} />
        <button
          type="submit"
          className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
