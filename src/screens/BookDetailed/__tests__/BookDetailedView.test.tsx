import {render} from '@testing-library/react-native';
import React from 'react';
import {BookDetailedView} from '../BookDetailedView';

describe('BookDetailed', () => {
  test('Should render correctly when loading', () => {
    const wrapper = render(
      <BookDetailedView
        handleFavoriteButton={() => {}}
        addingToFavorite={false}
        loading={true}
      />,
    );
    wrapper.getByTestId('book-detailed-loading');
  });
  test('Should render correctly when has error', () => {
    const wrapper = render(
      <BookDetailedView
        handleFavoriteButton={() => {}}
        addingToFavorite={false}
        loading={false}
        errorMessage="Houve um erro"
      />,
    );
    wrapper.getByText('Houve um erro');
  });
  test('Should render correctly when has data', () => {
    const wrapper = render(
      <BookDetailedView
        handleFavoriteButton={() => {}}
        addingToFavorite={false}
        loading={false}
        errorMessage=""
        bookInfo={{
          author: 'Wesley Marcelino',
          title: 'BooksApp',
          subtitle: 'A app to see books',
          uri: '',
          publisher: '',
          description: 'A very nice app',
        }}
      />,
    );
    wrapper.getByText('BooksApp');
    wrapper.getByText('A app to see books');
    wrapper.getByText('A very nice app');
  });
});
