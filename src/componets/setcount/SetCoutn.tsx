import React from 'react'
import styled from 'styled-components'
import { Button } from '../button/Button'


export const SetCoutn = () => {
	
	
	return (
		<Wrapper>
			<div>max value: <input type={'number'}/></div>
			<div>start value: <input type={'number'}/></div>
			<ButtonWrapper>
				<Button title={'set'} onClick={()=>{}}/>
			</ButtonWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	max-width: 200px;
	height: 100%;
  padding: 15px;
  align-items: flex-start;
	border: 3px solid #61dafb;
	border-radius: 2px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border: 2px solid #61dafb;
  border-radius: 2px;
`