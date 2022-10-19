/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
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
          uri: bookInfo.uri || 'https://via.placeholder.com/150',
          height: 300,
          width: 250,
        }}
      />
      <Title>{bookInfo.title}</Title>
      <BookAtributte>{bookInfo.subtitle}</BookAtributte>
      <RenderHTML contentWidth={width} source={{html: bookInfo.description}} />
    </Container>
  );
};
