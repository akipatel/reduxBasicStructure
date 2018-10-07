// store.dispatch({type:"INC", 		payload	: 12 	});
// store.dispatch({type:"DEC", 		payload	: 15 	});
import { Actions } from '../constants/ActionTypes';

export function increment( number ) {
	return {
		type 		: Actions.INCREMENT,
		payload	: number
	};
}

export function decrement( number ){
	return {
		type 		: Actions.DECREMENT,
		payload : number
	};
}
