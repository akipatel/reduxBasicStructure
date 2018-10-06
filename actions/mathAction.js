// store.dispatch({type:"INC", 		payload	: 12 	});
// store.dispatch({type:"DEC", 		payload	: 15 	});

export function increment( number ) {
	return {
		type 		: 'INCREMENT',
		payload	: number
	};
}

export function decrement( number ){
	return {
		type 		: 'DECREMENT',
		payload : number
	};
}
