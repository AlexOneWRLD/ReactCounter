import React from 'react'
import styled from 'styled-components'

type Props = {
	countNum: number
}

export const Table = ({ countNum }: Props) => {
	
	const countStyle: React.CSSProperties = {
		color: countNum === 5 ? 'red' : '#61dafb'
	}
	
	return (
		<TableStyles style={countStyle}>{countNum}</TableStyles>
	)
}

const TableStyles = styled.div`
  margin: 0 auto 20px;
  padding: 15px 30px;
  height: 60px;
  width: 140px;
  color: black;
  font-size: 30px;
	border-radius: 10px;
	border: 1px solid #61dafb;
`
