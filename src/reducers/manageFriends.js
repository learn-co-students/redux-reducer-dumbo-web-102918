export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":{
      let newArr = [...state.friends,action.friend]
      return {...state, friends: newArr}
    }
    case "REMOVE_FRIEND":{
      let newArr = state["friends"].filter(f => f.id!== action.id)
      return {...state, friends: newArr}
    }
    default:
      return state
  }
}
