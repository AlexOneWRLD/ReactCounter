import React, { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Counter } from './componets/counter/Counter'
import { SetCoutn } from './componets/setcount/SetCoutn'
import { Container } from './componets/styled-components/container/Container'
import { FlexWrapper } from './componets/styled-components/flexwrapper/FlexWrapper'
import { GlobalStyled } from './styles/Global.styles'

function App() {
	
	const [maxValue, setMaxValue] = useState(5)
	const [minValue, setMinValue] = useState(0)
	const [table, setTable] = useState(minValue)
	const [valueTable, setValueTable] = useState<boolean>(false)
	
	
	useEffect(() => {
		let ValueAsStringMax = localStorage.getItem('max_Value')
		if (ValueAsStringMax) {
			let newValue = JSON.parse(ValueAsStringMax)
			setMaxValue(newValue)
		}
	}, [])
	
	useEffect(() => {
		let ValueAsStringMin = localStorage.getItem('min_Value')
		if (ValueAsStringMin) {
			let newValue = JSON.parse(ValueAsStringMin)
			setMinValue(newValue)
			setTable(newValue)
		}
	}, [])
	
	const incCounter = () => {
		if (table < maxValue) {
			setTable(table + 1)
		}
	}
	
	const resetCounter = () => {
		setTable(minValue)
	}
	
	const setMaxValueCount = (maxValue: number) => {
		setMaxValue(maxValue)
	}
	
	const setMinValueCount = (minValue: number) => {
		setMinValue(minValue)
		setTable(minValue)
	}
	
	
	return (
		<div className='App'>
			<GlobalStyled />
			<Container>
				<CenterComp>
					<FlexWrapper gap={'20px'} justify={'center'}>
						<SetCoutn
							maxValue={maxValue}
							minValue={minValue}
							setMaxValueCount={setMaxValueCount}
							setMinValueCount={setMinValueCount}
							setValueTable={setValueTable}
						/>
						<Counter
							table={table}
							incCounter={incCounter}
							resetCounter={resetCounter}
							maxValue={maxValue}
							minValue={minValue}
							valueTable={valueTable}
						/>
					</FlexWrapper>
				</CenterComp>
			</Container>
		</div>
	)
}

export default App

const CenterComp = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`






