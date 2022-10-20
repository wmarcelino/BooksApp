/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Button, ActivityIndicator} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {
  Container,
  StyledImage,
  Title,
  BookAtributte,
  StyledActivityIndicator,
} from './styles';
import {BookDetailedViewProps} from './types';

export const BookDetailedView = ({
  bookInfo,
  errorMessage,
  loading,
  addingToFavorite,
  handleFavoriteButton,
}: BookDetailedViewProps): JSX.Element => {
  const width = Dimensions.get('window').width;

  if (errorMessage) {
    return (
      <View>
        <Text>{errorMessage}</Text>
      </View>
    );
  }

  if (loading) {
    return <StyledActivityIndicator />;
  }
  return (
    <Container contentContainerStyle={{paddingBottom: 100}}>
      <StyledImage
        source={{
          uri:
            bookInfo.uri.replace('http', 'https') ||
            'https://via.placeholder.com/150',
          height: 300,
          width: 250,
        }}
      />
      <Title>{bookInfo.title}</Title>
      <BookAtributte>{bookInfo.subtitle}</BookAtributte>

      <Button
        title="Adicionar aos favoritos"
        onPress={handleFavoriteButton}
        disabled={addingToFavorite}
      />

      {addingToFavorite && <ActivityIndicator />}
      <RenderHTML contentWidth={width} source={{html: bookInfo.description}} />
    </Container>
  );
};
