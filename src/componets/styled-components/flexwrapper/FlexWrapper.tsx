import styled from 'styled-components'


type FlexWrapperPropsType = {
	direction?: string
	justify?: string
	align?: string
	wrap?: string
	gap?: string
	padding?: string
	height?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || 'unset'};
	padding:${props => props.padding || '0 0 0 0'} ;
	height: ${props => props.height || 'auto'};
`