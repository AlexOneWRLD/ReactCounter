const initialState = {
	maxValue: 5,
	minValue: 0,
	table: 0
}

export const countReducer = (state: initialState = initialState, action: Actions) => {
	switch (action.type) {
		case 'CHANGE_MAX_VALUE': {
			return { ...state, maxValue: action.payload.maxValue }
		}
		
		case 'CHANGE_MIN_VALUE': {
			return { ...state, minValue: action.payload.minValue }
		}
		
		case 'CHANGE_TABLE_VALUE': {
			return { ...state, table: action.payload.table}
		}
		
		default:
			return state
	}
}


export const changeMaxValueAC = (maxValue: number) => {
	return { type: 'CHANGE_MAX_VALUE', payload: { maxValue } } as const
}

export const changeMinValueAC = (minValue: number) => {
	return { type: 'CHANGE_MIN_VALUE', payload: { minValue } } as const
}

export const changeTableAC = (table: number) => {
	return { type: 'CHANGE_TABLE_VALUE', payload: { table } } as const
}

export type ChangeMaxAction = ReturnType<typeof changeMaxValueAC>
export type ChangeMinAction = ReturnType<typeof changeMinValueAC>
export type ChangeTableAction = ReturnType<typeof changeTableAC>

type Actions = ChangeMaxAction | ChangeMinAction | ChangeTableAction

type initialState = typeof initialState