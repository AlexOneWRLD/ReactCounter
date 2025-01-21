import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeTableAC } from '../../model/count-reducer'
import { selectMaxValue, selectMinValue, selectTableValue } from '../../model/count-selector'
import { Button } from '../button/Button'
import { Table } from '../table/Table'
import s from './Counter.module.css'


type Props = {
	valueTable: boolean
}

export const Counter = ({ valueTable }: Props) => {
	const maxValue = useAppSelector(selectMaxValue)
	const minValue = useAppSelector(selectMinValue)
	const tableValue = useAppSelector(selectTableValue)
	console.log(tableValue)
	
	const dispatch = useAppDispatch()
	
	const incCounter = () => {
		if (tableValue < maxValue) {
			dispatch(changeTableAC(tableValue + 1))
			console.log(tableValue)
		}
	}
	
	const resetCounter = () => {
		dispatch(changeTableAC(minValue))
		console.log(minValue)
	}
	
	return (
		<div className={s.wrapper}>
			<Table countTable={tableValue} valueTable={valueTable} />
			<div className={s.button_wrapper}>
				<Button
					title={'inc'}
					onClick={incCounter}
					className={tableValue === maxValue || minValue < 0 || maxValue < 0 || maxValue < minValue ? s.disable_btn : s.btn}
					disabled={tableValue === maxValue || maxValue === minValue || maxValue < 0 || minValue < 0 || maxValue < minValue}
				/>
				<Button
					title={'reset'}
					onClick={resetCounter}
					className={minValue < 0 || maxValue < 0 || maxValue === minValue || maxValue < minValue ? s.disable_btn : s.btn}
					disabled={maxValue === minValue || maxValue < 0 || minValue < 0 || maxValue < minValue}
				/>
			</div>
		</div>
	)
}
