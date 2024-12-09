import { Button } from '../button/Button'
import { Table } from '../table/Table'
import s from './Counter.module.css'


type Props = {
	maxValue:number
	table: number
	incCounter:()=>void
	resetCounter:()=>void
}

export const Counter = ({table,incCounter,maxValue,resetCounter}:Props) => {
	
	return (
		<div className={s.wrapper}>
			<Table countNum={table} maxValue={maxValue} />
			<div className={s.button_wrapper}>
				<Button
					title={'inc'}
					onClick={incCounter}
					className={table === maxValue ? s.disable_btn : s.btn}
				/>
				<Button
					title={'reset'}
					onClick={resetCounter}
				/>
			</div>
		</div>
	)
}
