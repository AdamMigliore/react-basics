import { DELETE_POST } from "./actionTypes";

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id,
  },
});
