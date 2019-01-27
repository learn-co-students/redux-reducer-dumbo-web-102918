export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
      case 'REMOVE_FRIEND':
      const gonner = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
          friends: [
            ...state.friends.slice(0, gonner),
            ...state.friends.slice(gonner + 1)
        ]}
      )
      //break;
    default:
      return state
  }
}
