import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #312e38;
  padding: 20px;
`;

export const PlaylistItem = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  background: #6b6970;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 5px 20px;
`;

export const ImagePlaylist = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const ContentInfo = styled.View`
  margin-left: 10px;
`;

export const Tittle = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Info = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #fafafa;
`;

export const Header = styled.View`
  height: 80px;
  width: 100%;

  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #fff;

  font-size: 20px;
`;

export const Hr = styled.View`
  width: 60px;
  height: 2px;
  background: #ff9000;
  margin-left: 5px;
`;

export const FlatPlaylist = styled.FlatList`
  margin-bottom: 80px;
  /* padding-bottom: 200px; */
`;
