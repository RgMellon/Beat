import React, { useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
  FlatPlaylist,
} from './styles';
import api from '../../services/axios';

function Playlist() {
  const navigation = useNavigation();

  const [myPlaylist, setMyPlaylist] = useState([]);

  useEffect(() => {
    async function getPlaylists() {
      const response = await api.get('/me/playlists');
      const { items } = response.data;

      setMyPlaylist(items);
    }

    getPlaylists();
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <HeaderTitle> Playlists </HeaderTitle>
          <Hr />
        </Header>

        <FlatPlaylist
          data={myPlaylist}
          renderItem={({ item }) => (
            <PlaylistItem
              onPress={() =>
                navigation.navigate('DetailPlaylist', {
                  id: item.id,
                })
              }
            >
              <ImagePlaylist
                resizeMode="cover"
                source={{
                  uri: item.images[0].url,
                }}
              />
              <ContentInfo>
                <Tittle> {item.name} </Tittle>
                <Info> {item.tracks.total} songs </Info>
              </ContentInfo>
            </PlaylistItem>
          )}
        />
      </SafeAreaView>
    </Container>
  );
}

export default Playlist;
