import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Button } from "./ui/button";
import type { Post } from "../types/post";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="pt-0 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          src="https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_960_720.jpg"
        />
      </div>

      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="h-3 w-3 mr-1" />
            {post.createdAt}
          </div>
        </div>
        <CardTitle>
          <a href="#" className="inter-semibold text-2xl cursor-pointer">
            {post.title} now looks cool
          </a>
        </CardTitle>
        <CardDescription className="inter-regular text-md">
          {post.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            12 minute read
          </div>
          <Button variant="outline" size="lg" asChild>
            <a href="#">
              Read More <ArrowRight />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default PostCard;
