import { Navbar } from "./components/Navbar";
import { TextEditor } from "./components/TextEditor";
import { PostForm } from "./features/PostForm";
import PostList from "./features/PostList";
import { Home } from "./pages/Home";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "Title 1",
      description: "this is a description for the post",
      imageURL:
        "https://cdn.pixabay.com/photo/2018/03/14/18/05/alpine-hut-3225908_960_720.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      description:
        "tthis is a description forthis is a description forthis is a description forthis is a description forthis is a description forthis is a description forhis is a description for the post",
      imageURL:
        "https://cdn.pixabay.com/photo/2018/03/14/18/05/alpine-hut-3225908_960_720.jpg",
    },
    {
      id: 3,
      title: "Title 2",
      description:
        "tthis is a description forthis is a description forthis is a description forthis is a description forthis is a description forthis is a description forhis is a description for the post",
      imageURL:
        "https://cdn.pixabay.com/photo/2018/03/14/18/05/alpine-hut-3225908_960_720.jpg",
    },
    {
      id: 4,
      title: "Title 2",
      description:
        "tthis is a description forthis is a description forthis is a description forthis is a description forthis is a description forthis is a description forhis is a description for the post",
      imageURL:
        "https://cdn.pixabay.com/photo/2018/03/14/18/05/alpine-hut-3225908_960_720.jpg",
    },
  ];

  return (
    <div className="p-4">
      {/* <PostList posts={posts} /> */}
      {/* <TextEditor /> */}
      <Navbar />
      <PostForm />
      <Home />
    </div>
  );
}
