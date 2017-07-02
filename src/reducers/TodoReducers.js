import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, REAET_EDIT, SAVE_TODO, CLEAR_COMPLETED } from "../actions/TodoActions";

export function todos( state = [], action ) {
  switch( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          edit: false
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
    case EDIT_TODO:
      nextState = [...state];
      nextState[ action.index ].edit = !nextState[ action.index ].edit;
      return nextState;
    case REAET_EDIT:
      nextState = [];
      state.map(todo => {
        if ( todo.edit )
          todo.edit = false;
        nextState.push( todo );
      });

      return nextState;
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
