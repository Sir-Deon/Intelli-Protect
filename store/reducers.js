import { SET_USER } from "./actions";
const initialState = {
  user: {
    id: "",
    email: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
