export interface Post {
  id?: number;
  likes: number;
  title: string;
  description: string;
  imageURL: string;
  content: string;
  category: string;
  createdAt?: string;
}
