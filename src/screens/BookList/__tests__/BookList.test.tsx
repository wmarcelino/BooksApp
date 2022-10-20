import {render} from '@testing-library/react-native';
import React from 'react';
import {BookList} from '../index';

describe('BookList', () => {
  test('Should render correctly when loading', () => {
    const wrapper = render(
      <BookList
        searchText={''}
        loading={true}
        data={[]}
        handleCardSelection={() => {}}
        handleListEndReached={() => {}}
      />,
    );
    wrapper.getByTestId('book-list-loading');
  });

  test('Should render correctly when has an empty book list', () => {
    const wrapper = render(
      <BookList
        searchText={''}
        error={undefined}
        loading={false}
        data={[]}
        handleCardSelection={() => {}}
        handleListEndReached={() => {}}
      />,
    );
    wrapper.getByTestId('book-list-empty');
  });
  test('Should render correctly when has an error on retrieving data', () => {
    const wrapper = render(
      <BookList
        searchText={''}
        error={true}
        loading={false}
        errorMessage="Houve um erro"
        data={[]}
        handleCardSelection={() => {}}
        handleListEndReached={() => {}}
      />,
    );
    wrapper.getByText('Houve um erro');
  });

  test('Should render correctly when has data', () => {
    const wrapper = render(
      <BookList
        searchText={''}
        error={false}
        loading={false}
        errorMessage=""
        data={[
          {
            author: 'Wesley Marcelino',
            id: '12345',
            title: 'BooksApp',
            uri: '',
          },
        ]}
        handleCardSelection={() => {}}
        handleListEndReached={() => {}}
      />,
    );
    wrapper.getByText('Wesley Marcelino');
    wrapper.getByText('BooksApp');
  });
});
