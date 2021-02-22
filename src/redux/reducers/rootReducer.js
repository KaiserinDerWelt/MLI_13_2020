import actionTypes from "../actionTypes";

const initialState = {
	user: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.setUser:
			return { ...state, user: action.user };
		default:
			return state;
	}
};

export default reducer;
