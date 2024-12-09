import React from 'react'
import s from './Table.module.css'


type Props = {
	countNum: number
	maxValue: number
}

export const Table = ({ countNum,maxValue }: Props) => {
	return (
		<div className={s.table_styles}>
			<span className={countNum === maxValue ? s.warning_num : ''}>{countNum}</span>
		</div>
	)
}


