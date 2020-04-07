import React from "react";

//My Components
import PostList from './PostList';

export default function Home() {

  return (
    <div className="container">
      <h3 className="center black-text">Home</h3>
      <PostList />
    </div>
  );
}
