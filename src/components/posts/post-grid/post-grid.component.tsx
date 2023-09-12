import React from "react";
import { Post } from "../../common/interfaces/post.interface";
import PostGridItem from "../post-grid-item/post-grid-item.component";

interface PostGridProps {
  posts: Post[];
}
const PostGrid: React.FC<PostGridProps> = ({ posts }: PostGridProps) => {
  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id}>
          <PostGridItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
