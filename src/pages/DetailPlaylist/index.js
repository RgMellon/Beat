import React, { useState, useEffect } from 'react';
import BottomPlayerMusic from '../../components/BottomPlayerMusic';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { View, ActivityIndicator } from 'react-native';

import api from '../../services/axios';

import Music from '../../components/Music';

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
    <>
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
            renderItem={({ item }) => {
              return !!item.track.preview_url && <Music track={item.track} />;
            }}
          />
        </Content>
      </Container>
      {/* <BottomPlayerMusic /> */}
    </>
  );
};

export default DetailPlaylist;
