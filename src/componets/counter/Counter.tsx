import { Button } from '../button/Button'
import { Table } from '../table/Table'
import s from './Counter.module.css'


type Props = {
	maxValue:number
	minValue: number
	table: number
	incCounter:()=>void
	resetCounter:()=>void
}

export const Counter = ({table,incCounter,maxValue,minValue,resetCounter}:Props) => {
	
	return (
		<div className={s.wrapper}>
			<Table countNum={table} maxValue={maxValue} minValue={minValue} />
			<div className={s.button_wrapper}>
				<Button
					title={'inc'}
					onClick={incCounter}
					className={table === maxValue || minValue <0 || maxValue <0 || maxValue<minValue ? s.disable_btn : s.btn}
					disabled={table === maxValue|| maxValue === minValue || maxValue < 0|| minValue <0 || maxValue < minValue}
				/>
				<Button
					title={'reset'}
					onClick={resetCounter}
					className={minValue <0 || maxValue <0 || maxValue === minValue|| maxValue<minValue? s.disable_btn : s.btn}
					disabled={maxValue === minValue || maxValue < 0|| minValue <0 || maxValue < minValue}
				/>
			</div>
		</div>
	)
}
