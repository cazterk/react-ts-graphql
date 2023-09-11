import React from "react";
import PostGrid from "../../components/post-grid/post-grid.component";

const Home: React.FC = () => {
  const post = [
    {
      id: "postadfcahjsdf",
      title: "Post Title",
      body: "Post Body Text Text Text",
    },
  ];
  return (
    <>
      <PostGrid posts={post} />
    </>
  );
};

export default Home;
