import { createStore } from 'redux';
const initialState = {
	UserInfo: ''
};
function Reducer(state = initialState, action) {
	switch (action.type) {
		case 'UpdateState':
			return { ...initialState, UserInfo: action.UserData };
		default:
			return state;
	}
}

const Store = createStore(Reducer);
export default Store;
