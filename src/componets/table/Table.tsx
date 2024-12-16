import React from 'react'
import s from './Table.module.css'


type Props = {
	countNum: number
	maxValue: number
	minValue: number
}

export const Table = ({ countNum,maxValue,minValue }: Props) => {
	
	return (
		<div className={s.table_styles}>
			<span className={countNum === maxValue ? s.warning_num : ''}>
				{countNum < 0 || maxValue === minValue || maxValue < 0 || maxValue < minValue ? <span className={s.warning_num}>Incorrect value!</span> : countNum}
			</span>
		</div>
	)
}


