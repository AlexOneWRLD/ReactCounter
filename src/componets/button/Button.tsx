import React from 'react'
import styled from 'styled-components'


type ButtonPropsType = {
	title: string
	onClick: () => void
	className?:string
}

export const Button = ({ title, onClick,className }: ButtonPropsType) => {
	
	const onClickHandler = () => {
		onClick()
	}
	
	
	return (
		<ButtonStyles onClick={onClickHandler} className={className}>{title}</ButtonStyles>
	)
}


const ButtonStyles = styled.button`
  width: 100%;
  max-width: 60px;
  height: 30px;
  background-color: #61dafb;
  border-radius: 10px;
  margin: 0 auto;
	font-size: 25px;
`