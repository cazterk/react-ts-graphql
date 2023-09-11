import React from "react";
import { Post } from "../../common/interfaces/post.interface";

interface PostGridProps {
  posts: Post[];
}
const PostGrid: React.FC<PostGridProps> = ({ posts }: PostGridProps) => {
  return <div className="posts-grid"></div>;
};

export default PostGrid;
