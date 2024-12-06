import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Counter } from './componets/counter/Counter'
import { SetCoutn } from './componets/setcount/SetCoutn'
import { Container } from './componets/styled-components/container/Container'
import { FlexWrapper } from './componets/styled-components/flexwrapper/FlexWrapper'
import { GlobalStyled } from './styles/Global.styles'

function App() {
	return (
		<div className='App'>
			<GlobalStyled />
			<Container>
				<CenterComp>
					<FlexWrapper gap={'20px'} justify={'center'}>
						<SetCoutn />
						<Counter />
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






