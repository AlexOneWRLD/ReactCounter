import type { RootState } from '../app/store'

export const selectMaxValue = (state: RootState) => state.counter.maxValue
export const selectMinValue = (state: RootState) => state.counter.minValue
export const selectTableValue = (state: RootState) => state.counter.table