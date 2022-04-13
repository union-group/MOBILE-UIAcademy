import styled from 'styled-components/native'

export const PreviousVideoIconContainer = styled.View`
  position: absolute;
  top: 45%;
  left: 30%;
  z-index: 2;
`

export const TogglePlayContainer = styled.View`
  position: absolute;
  top: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const TogglePlay = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  align-self: center;
`

export const NextVideoIconContainer = styled.View`
  position: absolute;
  top: 45%;
  right: 30%;
  z-index: 2;
`
