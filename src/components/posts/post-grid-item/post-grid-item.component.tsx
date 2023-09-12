import React from "react";
import { Post } from "../../../common/interfaces/post.interface";

const PostGridItem: React.FC<{ post: Post }> = ({ post }: { post: Post }) => {
  return (
    <>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

export default PostGridItem;
