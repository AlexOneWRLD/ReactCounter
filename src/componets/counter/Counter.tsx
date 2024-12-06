import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../button/Button'
import { Table } from '../table/Table'


export const Counter = () => {
	
	const maxValue = 5
	const minValue = 0
	const [table, setTable] = useState<number>(minValue)
	
	const incCounter = () => {
		if (table < maxValue) {
			setTable(table + 1)
		}
	}
	
	const resetCounter = () => {
		setTable(minValue)
	}
	
	const incrementButtonStyle = {
		backgroundColor: table === maxValue ? 'lightgray' : '#61dafb',
	}
	
	const resetButtonStyle = {
		backgroundColor: table === minValue ? 'lightgray' : '#61dafb',
	}
	
	
	return (
		<Wrapper>
			<Table countNum={table} />
			<ButtonWrapper>
				<Button title={'inc'} onClick={incCounter} style={incrementButtonStyle} />
				<Button title={'reset'} onClick={resetCounter} style={resetButtonStyle} />
			</ButtonWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  padding: 15px;
  align-items: center;
	border: 3px solid #61dafb;
	border-radius: 2px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid #61dafb;
  border-radius: 2px;
	gap: 10px;
`