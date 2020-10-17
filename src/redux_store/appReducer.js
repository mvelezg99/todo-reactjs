export const UPDATE_EDITING_ACTION = "UPDATE_EDITING";

export function appReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_EDITING_ACTION: {
        return {...state, isEditing: action.isEditing}
    }
    default:
      return state;
  }
}

export const updateEditing = (isEditing) => {
  return {
    type: UPDATE_EDITING_ACTION,
    isEditing,
  };
};

