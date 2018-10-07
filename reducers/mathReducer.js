import { Actions } from '../constants/ActionTypes';

const mathReducer = ( state = 0, action ) => {
	switch( action.type ) {
		case Actions.INCREMENT:
			return state+action.payload;
		case Actions.DECREMENT:
			return state-action.payload;
	}

	return state;
}

export default mathReducer;
