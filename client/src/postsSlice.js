// export function addPost(post) {
//     return {
//       type: "posts/add",
//       payload: post,
//     };
//   }
  
//   export function removePost(postId) {
//     return {
//       type: "posts/remove",
//       payload: postId,
//     };
//   }

  export function setPost(post) {
    return {
      type: "posts/set",
      payload: post,
    };
  }

  const initialState = [];
  
  export default function postsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      // case "posts/add":
      //   return [...state, payload];
      // case "posts/remove":
      //   return state.filter((post) => post.id !== payload);
      case "posts/set":
        return [payload]
      default:
        break;
    }
    return state;
  }