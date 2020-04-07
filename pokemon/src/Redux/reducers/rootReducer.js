import { DELETE_POST } from "../actions/actionTypes";

const initialState = {
  posts: [
    { id: 1, title: "PokemonGo", body: "I play it everyday!" },
    { id: 2, title: "PokemonGo", body: "I play it everyday!" },
    { id: 3, title: "PokemonGo", body: "I play it everyday!" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
