import React from "react";

import { useGetPosts } from "../../hooks/posts/useGetPosts";
import PostGrid from "../../components/posts/post-grid/post-grid.component";

const Home: React.FC = () => {
  const posts = useGetPosts();
  return (
    <>
      <PostGrid posts={posts || []} />
    </>
  );
};

export default Home;
