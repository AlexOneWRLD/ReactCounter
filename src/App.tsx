import React, { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { useAppDispatch } from './app/hooks'
import { Counter } from './componets/counter/Counter'
import { SetCoutn } from './componets/setcount/SetCoutn'
import { Container } from './componets/styled-components/container/Container'
import { FlexWrapper } from './componets/styled-components/flexwrapper/FlexWrapper'
import { changeMaxValueAC, changeMinValueAC, changeTableAC } from './model/count-reducer'
import { GlobalStyled } from './styles/Global.styles'

function App() {
	
	const dispach = useAppDispatch()
	
	const [valueTable, setValueTable] = useState<boolean>(false)
	
	
	useEffect(() => {
		let ValueAsStringMax = localStorage.getItem('max_Value')
		if (ValueAsStringMax) {
			let newValue = JSON.parse(ValueAsStringMax)
			dispach(changeMaxValueAC(newValue))
		}
	}, [])
	
	useEffect(() => {
		let ValueAsStringMin = localStorage.getItem('min_Value')
		if (ValueAsStringMin) {
			let newValue = JSON.parse(ValueAsStringMin)
			dispach(changeMinValueAC(newValue))
			dispach(changeTableAC(newValue))
		}
	}, [])
	
	
	return (
		<div className='App'>
			<GlobalStyled />
			<Container>
				<CenterComp>
					<FlexWrapper gap={'20px'} justify={'center'}>
						<SetCoutn
							setValueTable={setValueTable}
						/>
						<Counter
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






