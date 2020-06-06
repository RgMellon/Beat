import styled from 'styled-components/native';

export const Container = styled.View`
  width: 120%;
  height: 70px;
  background: rgba(0, 0, 0, 0.9);
  padding: 20px;

  position: absolute;
  bottom: 0px;
  right: 0;
  left: 0;
  /* justify-content: center; */
  z-index: 9999;
  flex-direction: row;
  align-items: center;
`;

export const ButtonControllerMusic = styled.TouchableOpacity`
  width: 30px;
  flex-direction: row;
  position: relative;
`;

export const TitleMusic = styled.Text`
  color: #fafafa;
  font-size: 15px;
  font-weight: 200;
  margin-left: 20px;
`;

export const ControllerPlayerButton = styled.TouchableOpacity``;
