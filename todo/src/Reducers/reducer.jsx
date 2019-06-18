import { ADD_TODO } from "../Actions/index";

const initialState = {
  todos: [
    {
      value: "First Todo",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { value: action.payload, completed: false }]
      };
    default:
      return state;
  }
};

export default reducer;
