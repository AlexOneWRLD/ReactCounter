const initialState: CounterState = {
    maxValue: 5,
    minValue: 0,
    currentValue: 0,
    valueTable: false,
};

export interface CounterState {
    maxValue: number;
    minValue: number;
    currentValue: number;
    valueTable: boolean;
}

export type SetMaxAction ={
	type: 'SET_MAX';
	payload: number
}

export type SetMinAction ={
	type: 'SET_MIN';
	payload: number
}

export type IncrementAction ={
	type: 'INCREMENT';
}

export type ResetAction ={
	type: 'RESET';
}

export type LoadAction ={
	type: 'LOAD_VALUES';
	payload: {
		maxValue: number;
		minValue: number;
		currentValue: number;
	}
}



export type Actions = SetMaxAction | SetMinAction | IncrementAction | ResetAction | LoadAction ;



export const counterReducer = (state: CounterState = initialState, action: Actions) => {
    switch (action.type) {
        case 'SET_MAX':
            return { ...state, maxValue: action.payload };
        case 'SET_MIN':
            return { ...state, minValue: action.payload, currentValue: action.payload };
        case 'INCREMENT':
            return { ...state, currentValue: Math.min(state.currentValue + 1, state.maxValue) };
        case 'RESET':
            return { ...state, currentValue: state.minValue };
        case 'LOAD_VALUES':
            return { ...state, maxValue: action.payload.maxValue, minValue: action.payload.minValue, currentValue: action.payload.minValue };
        default:
            return state;
    }
};


export const setMaxValueAC = (payload: number): SetMaxAction => {
	return { type: 'SET_MAX', payload: payload }
}

export const setMinValueAC = (payload:  number): SetMinAction => {
	return { type: 'SET_MIN', payload: payload }
}

export const incrementAC = (): IncrementAction => {
	return { type: 'INCREMENT' }
}

export const resetAC = (): ResetAction => {
	return { type: 'RESET' }
}

export const loadValuesAC = (payload: {maxValue: number,minValue: number, currentValue: number}): LoadAction => {
	return { type: 'LOAD_VALUES', payload }
}
