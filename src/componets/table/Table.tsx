import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectMaxValue, selectMinValue, selectTableValue } from '../../model/count-selector'
import s from './Table.module.css'


type Props = {
	valueTable:boolean
	countTable:number
}

export const Table = ({valueTable,countTable }: Props) => {
	
	const maxValue = useAppSelector(selectMaxValue)
	const minValue = useAppSelector(selectMinValue)
	
	return (
		<div className={s.table_styles}>
			<span className={countTable === maxValue ? s.warning_num : ''}>
				{!valueTable? <div>SET value</div> :  countTable < 0 || maxValue === minValue || maxValue < 0 || maxValue < minValue ? <span className={s.warning_num}>Incorrect value!</span> : countTable}
			</span>
		</div>
	)
}


