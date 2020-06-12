import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background: #312e38;
`;

export const SearchInput = styled.TextInput`
  width: 80%;
  background: #6b6970;
  border-radius: 8px;
  /* margin-top: 20px; */
  padding: 15px;
  height: 50px;
  color: #fff;
`;

export const WrapperSearch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin-top: -20px;
  z-index: 9999999999999; */
`;

export const ButtonSearch = styled.TouchableOpacity`
  background: #ff9000;
  width: 70px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ListMusic = styled.FlatList`
  margin-top: 20px;
  margin-bottom: 130px;
  /* background: red; */
`;

export const PreviewArtist = styled.ImageBackground`
  width: 100%;
  height: 400px;
  /* padding: 20px; */
  background: #6b6970;
  /* margin-top: 20px; */
  position: relative;
  border-radius: 8px;
  /* opacity: 0.3; */
`;

export const InfoArtitst = styled.View`
  position: absolute;
  /* left: 20px; */
  bottom: 0px;
  /* background: #000; */
  opacity: 0.8;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 100;
  color: #fafafa;
  opacity: 0.8;
  /* margin-left: 20px; */
`;
export const Name = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 50px;
  margin-left: -20px;
`;

export const Followers = styled.Text`
  font-weight: 100;
  color: #fafafa;
  opacity: 0.8;
`;

export const PopularityContainer = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  /* background: red; */
  align-items: center;
`;

export const Popularity = styled.Text`
  font-weight: 100;
  color: #fafafa;
  opacity: 0.8;
  margin-top: 10px;
`;
