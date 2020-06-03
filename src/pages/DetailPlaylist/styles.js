import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Header = styled.View`
  position: relative;
`;

export const ImageAlbum = styled.Image`
  width: 100%;
  height: 400px;
  opacity: 0.7;
`;

export const ContentHeader = styled.View`
  width: 100%;
  position: absolute;
  padding: 20px;

  background: rgba(0, 0, 0, 0.5);
  /* height: 100px; */
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const TitleInfo = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;

export const DescriptionInfo = styled.Text`
  color: #d0d0d0;
  font-size: 16px;
  font-weight: 400;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: #fafafa;
  position: absolute;
  left: 20px;
  top: 50px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Music = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  background: #6b6970;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const ListMusic = styled.FlatList`
  margin-bottom: 80px;
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

export const WrapperImage = styled.View`
  position: relative;
`;
