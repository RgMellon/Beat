import React, { useState, useEffect } from 'react';

// import TrackPlayer from 'react-native-track-player';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { View, ActivityIndicator } from 'react-native';

import api from '../../services/axios';

import {
  Container,
  Header,
  ImageAlbum,
  ContentHeader,
  Title,
  ContentInfo,
  TitleInfo,
  DescriptionInfo,
  BackButton,
  Content,
  ListMusic,
  Music,
  ImageTrack,
  ContentMusic,
  MusicDuration,
  MusicName,
  WrapperImage,
} from './styles';

const DetailPlaylist = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const [load, setLoad] = useState(true);
  const [detailPlaylist, setDetailPlaylist] = useState({});

  useEffect(() => {
    async function getPlaylistDetail() {
      const response = await api.get(`playlists/${id}`);
      const { data } = response;

      setDetailPlaylist(data);
      setLoad(false);
    }

    getPlaylistDetail();
  }, [id]);

  function handlePlay(url) {
    // console.log(url);
    // TrackPlayer.setupPlayer().then(async () => {
    //   // Adds a track to the queue
    //   await TrackPlayer.add({
    //     id: 'trackId',
    //     url: url,
    //     title: 'Track Title',
    //     artist: 'Track Artist',
    //   });
    //   // Starts playing it
    //   TrackPlayer.play();
    // });
  }

  function handeGoBack() {
    navigation.goBack();
  }

  if (load) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handeGoBack}>
          <Icon size={20} name="chevron-left" color="#666" />
        </BackButton>
        <ImageAlbum
          resizeMode="cover"
          source={{
            uri: detailPlaylist.images[0].url,
          }}
        />
        <ContentHeader>
          <Title> {} </Title>
          <ContentInfo>
            <TitleInfo> Artist </TitleInfo>
            <DescriptionInfo> {detailPlaylist.name} </DescriptionInfo>
          </ContentInfo>

          <ContentInfo>
            <TitleInfo> Duration </TitleInfo>
            <DescriptionInfo> 80min </DescriptionInfo>
          </ContentInfo>
        </ContentHeader>
      </Header>

      <Content>
        <Title> Musics </Title>
        <ListMusic
          data={detailPlaylist.tracks.items}
          keyExtractor={item => item.track.id}
          renderItem={({ item }) => (
            <Music
              onPress={() => {
                handlePlay(item.track.preview_url);
              }}
            >
              <WrapperImage>
                <ImageTrack source={{ uri: item.track.album.images[0].url }} />

                <Icon
                  size={35}
                  name="play"
                  color="#fff"
                  style={{
                    position: 'absolute',
                    top: '10%',
                    left: '20%',
                  }}
                />
              </WrapperImage>

              <ContentMusic>
                <MusicName numberOfLines={1}> {item.track.name} </MusicName>

                <MusicDuration>
                  Duration : {item.track.duration_ms}
                </MusicDuration>
              </ContentMusic>
            </Music>
          )}
        />
      </Content>
    </Container>
  );
};

export default DetailPlaylist;
