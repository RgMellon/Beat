import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled(LinearGradient).attrs({
  colors: ['#ff9000', '#312e38'],
})`
  opacity: 0.7;
  flex: 1;
  background: #312e38;
  padding: 20px;
  position: relative;
  justify-content: center;
`;

export const Message = styled.Text`
  color: #fafafa;
  font-size: 50px;
  opacity: 0.8;
  font-weight: 200;
`;

export const Title = styled.Text`
  /* color: #fff; */
  font-size: 90px;
  color: #ff9000;
  font-weight: bold;
  margin-left: -10px;
`;

export const WrapperMessage = styled.View`
  align-items: flex-start;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  border-radius: 100px;
  background: #ff9000;
  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const ContentLogin = styled.View`
  position: absolute;
  bottom: 30px;
  left: 45px;
  /* align-items: center; */
  width: 100%;
`;
