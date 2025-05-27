import { createPost } from "../api/posts";
import { Tiptap } from "@/components/rich-text-editor/Tiptap";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Failed to submit: " + error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="p-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create post</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid md:grid-cols-2 w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Learn to code"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  placeholder="A very good post"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  id="image-url"
                  placeholder="https://image.jpg"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Content</Label>
                <Tiptap content={content} onChange={setContent} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
