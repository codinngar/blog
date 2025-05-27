import { TextEditor } from "../components/TextEditor";

export const PostForm = () => {
  return (
    <div>
      <input placeholder="title" type="text" />
      <input placeholder="description" type="text" />
      <input placeholder="image url" type="text" />
      <TextEditor />
    </div>
  );
};
