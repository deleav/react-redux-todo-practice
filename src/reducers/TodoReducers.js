import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SAVE_TODO, CLEAR_COMPLETED } from "../actions/TodoActions";

export function todos( state = [], action ) {
  switch( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      let nextState = [...state];
      nextState.splice(action.index, 1);
      return nextState;
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index)
          return {
            ...todo, completed: !todo.completed
          }

        return todo
      });
    case SAVE_TODO:
      nextState = [...state];
      nextState[ action.index ].edit = !nextState[ action.index ].edit;
      nextState[ action.index ].text = action.text;
      return nextState;
    case CLEAR_COMPLETED:
      return state.filter( todo => !todo.completed );
    default:
      return state;
  }
}
