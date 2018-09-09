const 	CHANGE_TEXT = 'CHANGE_TEXT'
const textReducer = (textState = '', action) => {
  switch (action.type) {
      case CHANGE_TEXT:
        return textState + action.newText
      default:
        return textState
	}; 
}

export default textReducer;
