import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../button/Button'
import s from './SetCount.module.css'


type Props = {
	maxValue: number
	minValue: number
	setMaxValueCount: (maxValue: number) => void
	setMinValueCount: (minValue: number) => void
}

export const SetCoutn = ({ setMaxValueCount, setMinValueCount, maxValue, minValue }: Props) => {
	
	
	const [max_Value, setMax_Value] = useState(maxValue)
	const [min_Value, setMin_Value] = useState(minValue)
	
	const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const MaxValue = e.currentTarget.value
		setMax_Value(Number(MaxValue))
		setMaxValueCount(Number(MaxValue))
	}
	
	const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const MinValue = e.currentTarget.value
		setMin_Value(Number(MinValue))
		setMinValueCount(Number(MinValue))
	}
	
	const setAllValue = () => {
		setMaxValueCount(max_Value)
		setMinValueCount(min_Value)
		localStorage.setItem('max_Value', JSON.stringify(max_Value))
		localStorage.setItem('min_Value', JSON.stringify(min_Value))
	}
	
		useEffect(()=>{
		let ValueAsStringMax = localStorage.getItem('max_Value')
		if (ValueAsStringMax){
			let newValue = JSON.parse(ValueAsStringMax)
			setMax_Value(newValue)
		}
	},[])
	
	useEffect(()=>{
		let ValueAsStringMin = localStorage.getItem('min_Value')
		if (ValueAsStringMin){
			let newValue = JSON.parse(ValueAsStringMin)
			setMin_Value(newValue)
		}
	},[])
	
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
					className={minValue <0 || maxValue <0 || maxValue === minValue||maxValue<minValue ? s.error : s.button }
					disabled={maxValue === minValue || maxValue < 0|| minValue <0 || maxValue < minValue}
				/>
			</div>
		</div>
	)
}

