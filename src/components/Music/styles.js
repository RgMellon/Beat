import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  background: #6b6970;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const WrapperImage = styled.View`
  position: relative;
`;

export const ImageTrack = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  opacity: 0.8;
`;

export const ContentMusic = styled.View`
  margin-left: 20px;
`;

export const MusicName = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  width: 250px;
`;

export const MusicDuration = styled.Text`
  color: #d0d0d0;
  font-size: 14px;
  font-weight: 200;
  margin-left: 5px;
  margin-top: 5px;
`;
