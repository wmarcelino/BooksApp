import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {useCallback, useState} from 'react';
import {getFavorites} from '../../api/books/repositories/Books/index';
import {BookList} from '../BookList';
import {IBookCard} from '../BookList/types';

//TODO: Tipagem correta da navegacao.
export const FavoritesViewModel = ({
  navigation: {navigate},
}: any): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState<IBookCard[]>([]);

  useFocusEffect(() => {
    getFavorites()
      .then(data => {
        const newBooks = data.items?.map(item => ({
          id: item.id || '',
          author: item.volumeInfo?.authors ? item.volumeInfo?.authors[0] : '',
          title: item.volumeInfo?.title || '',
          description: item.volumeInfo?.description || '',
          uri: item.volumeInfo?.imageLinks?.thumbnail || '',
        }));

        setBooks(newBooks || []);
      })
      .catch(getError => {
        console.log(getError);
        setError(true);
      })
      .finally(() => {
        setLoadingMore(false);
        setLoading(false);
      });
  });

  const handleCardSelection = useCallback(
    (item: IBookCard) => {
      navigate('Detalhe', {id: item.id});
    },
    [navigate],
  );

  return (
    <BookList
      loading={loading}
      error={error}
      searchText={''}
      loadingMore={loadingMore}
      data={books}
      handleCardSelection={handleCardSelection}
      handleListEndReached={() => {}}
    />
  );
};
