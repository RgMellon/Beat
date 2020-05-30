import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native';

import {
  Container,
  PlaylistItem,
  Header,
  ImagePlaylist,
  ContentInfo,
  Tittle,
  Info,
  HeaderTitle,
  Hr,
} from './styles';

function Playlist() {
  return (
    <Container>
      <SafeAreaView>
        <Header>
          <HeaderTitle> Playlists </HeaderTitle>
          <Hr />
        </Header>
        <PlaylistItem>
          <ImagePlaylist
            resizeMode="contain"
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBTMT22Fv0M7_ygw16ph9X32OAgbVD9n2IGkPfQb280uMLavz-&usqp=CAU',
            }}
          />
          <ContentInfo>
            <Tittle> Indie Folk </Tittle>
            <Info> 50 songs </Info>
          </ContentInfo>
        </PlaylistItem>
      </SafeAreaView>
    </Container>
  );
}

Playlist.navigationOptions = {
  tabBarLabel: 'Home',

  tabBarIcon: ({ tintColor }) => (
    <Icon size={18} name="ticket-alt" color={tintColor} />
  ),
};
export default Playlist;
