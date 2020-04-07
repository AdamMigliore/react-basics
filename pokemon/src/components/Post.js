import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../Redux/actions/postActions";

function Post({ post, deletePost, history }) {
  const deleteTodo = () => {
    deletePost(post.id);
    history.push('/');
  };

  const postDisplay = post ? (
    <div>
      <h4>{post.title}</h4>
      <p className="black-text lighten-2">{post.body}</p>
    </div>
  ) : (
    <p className="black-text lighten-2">Loading post ...</p>
  );

  return (
    <div className="post container">
      <div className="center">
        {postDisplay}
        <button className="btn red" onClick={deleteTodo}>
          Delete Post
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find((post) => post.id == ownProps.match.params.post_id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
