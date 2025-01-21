import React, { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeMaxValueAC, changeMinValueAC, changeTableAC } from '../../model/count-reducer'
import { selectMaxValue, selectMinValue } from '../../model/count-selector'
import { Button } from '../button/Button'
import s from './SetCount.module.css'


type Props = {
	setValueTable: (el: boolean) => void
}

export const SetCoutn = ({ setValueTable }: Props) => {
	
	
	const maxValue = useAppSelector(selectMaxValue)
	const minValue = useAppSelector(selectMinValue)
	
	const dispatch = useAppDispatch()
	
	const [max_Value, setMax_Value] = useState(maxValue)
	const [min_Value, setMin_Value] = useState(minValue)
	
	
	const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const MinValue = e.currentTarget.value
		dispatch(changeMinValueAC(Number(MinValue)))
		dispatch(changeTableAC(minValue))
		setMin_Value(Number(MinValue))
		setValueTable(false)
	}
	
	const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const MaxValue = e.currentTarget.value
		setMax_Value(Number(MaxValue))
		dispatch(changeMaxValueAC(Number(MaxValue)))
		setValueTable(false)
	}
	
	const setAllValue = () => {
		dispatch(changeMaxValueAC(max_Value))
		dispatch(changeMinValueAC(min_Value))
		localStorage.setItem('max_Value', JSON.stringify(max_Value))
		localStorage.setItem('min_Value', JSON.stringify(min_Value))
		setValueTable(true)
	}
	
	useEffect(() => {
		let ValueAsStringMax = localStorage.getItem('max_Value')
		if (ValueAsStringMax) {
			let newValue = JSON.parse(ValueAsStringMax)
			setMax_Value(newValue)
		}
	}, [])
	
	useEffect(() => {
		let ValueAsStringMin = localStorage.getItem('min_Value')
		if (ValueAsStringMin) {
			let newValue = JSON.parse(ValueAsStringMin)
			setMin_Value(newValue)
		}
	}, [])
	
	const buttonClassName = minValue < 0 || maxValue < 0 || maxValue === minValue || maxValue < minValue
	const buttonDisabled = maxValue === minValue || maxValue < 0 || minValue < 0 || maxValue < minValue
	
	return (
		<div className={s.wrapper}>
			<div className={s.value_wrapper}>
				<span className={s.span}>
					max value:
					<input
						type={'number'}
						value={max_Value}
						className={maxValue < 0 ? s.error_in : s.input}
						onChange={onChangeMaxHandler}
					/>
				</span>
				<span className={s.span}>
					start value:
					<input
						type={'number'}
						value={min_Value}
						className={minValue < 0 ? s.error_in : s.input}
						onChange={onChangeMinHandler}
					/>
				</span>
			</div>
			<div className={s.btn_wrapper}>
				<Button
					title={'set'}
					onClick={setAllValue}
					className={buttonClassName ? s.error : s.button}
					disabled={buttonDisabled}
				/>
			</div>
		</div>
	)
}

