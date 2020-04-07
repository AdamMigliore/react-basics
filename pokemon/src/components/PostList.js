import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function PostList({ posts }) {
  const list = posts.length ? (
    posts.map((post) => (
      <div className="posts card" key={post.id}>
        <div className="card-content">
          <Link to={`/${post.id}`}>
            <span className="card-title pink-text darken-1">{post.title}</span>
          </Link>
        </div>
      </div>
    ))
  ) : (
    <div className="center">There are no posts</div>
  );

  return (
    <div>
      <div className="container">
        <div className="center">{list}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);
