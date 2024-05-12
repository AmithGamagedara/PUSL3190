// reducer.js
const initialState = [];

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'UPDATE_EVENT':
      return state.map(event =>
        event.id === action.payload.id ? action.payload : event
      );
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.payload);
    default:
      return state;
  }
}