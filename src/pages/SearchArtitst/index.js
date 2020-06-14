import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  SearchInput,
  WrapperSearch,
  ButtonSearch,
  ListMusic,
  PreviewArtist,
  InfoArtitst,
  Title,
  Name,
  Followers,
  PopularityContainer,
  Popularity,
} from './styles';

import Music from '../../components/Music';
import api from '../../services/axios';

export default function SearchArtitst() {
  const [search, setSearch] = useState('');
  const [loadSearch, setLoadSearch] = useState(false);
  const [topTracksArtist, setTopTrackArtist] = useState([]);
  const [previewArtist, setPreviewArtist] = useState([]);

  const handleSearch = useCallback(async () => {
    setLoadSearch(true);

    try {
      const response = await api.get(`search?q=${search}&type=artist&limit=1`);

      const { artists } = response.data;

      const artistId = artists.items[0].id;

      const responseTopTracks = await api.get(
        `artists/${artistId}/top-tracks?country=BR`,
      );

      const { tracks } = responseTopTracks.data;

      const reverseTracks = await tracks.reverse();

      setTopTrackArtist(reverseTracks);
      setPreviewArtist(artists);

      setLoadSearch(false);
    } catch (err) {
      setLoadSearch(false);
      Alert.alert('Ops..', 'Looks like something wrong...');
      console.log(err);
    }
  }, [search]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#312e38' }}>
      {previewArtist.items && (
        <PreviewArtist
          resizeMode="cover"
          source={{
            uri: previewArtist.items[0].images[0].url,
          }}
        >
          <PopularityContainer>
            <AnimatedCircularProgress
              size={50}
              width={10}
              fill={previewArtist.items[0].popularity}
              tintColor="#ff9000"
              // onAnimationComplete={}
              backgroundColor="#3d5875"
            />

            <Popularity> popularity</Popularity>
          </PopularityContainer>
          <InfoArtitst>
            <Title>{previewArtist.items[0].type}</Title>
            <Name> {previewArtist.items[0].name} </Name>

            <Followers>
              {previewArtist.items[0].followers.total} followers
            </Followers>
          </InfoArtitst>
        </PreviewArtist>
      )}

      <Container>
        <WrapperSearch>
          <SearchInput
            clearButtonMode="always"
            blurOnSubmit
            returnKeyType="search"
            placeholder="Search an artist"
            placeholderTextColor="#fff"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={() => handleSearch()}
          />

          <ButtonSearch onPress={handleSearch}>
            {loadSearch ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Icon size={20} name="search" color="#fff" />
            )}
          </ButtonSearch>
        </WrapperSearch>

        {topTracksArtist.length > 0 && (
          <>
            <ListMusic
              data={topTracksArtist}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return <Music track={item} />;
              }}
            />
          </>
        )}
      </Container>
    </ScrollView>
  );
}

SearchArtitst.navigationOptions = {
  tabBarLabel: 'Home',
};
