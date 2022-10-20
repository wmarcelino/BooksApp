import React, {useCallback, useEffect} from 'react';
import {useState} from 'react';
import {getById, favorite} from '../../api/books/repositories/Books';
import {BookDetailedView} from './BookDetailedView';
import {IBookInfo} from './types';

//TODO: Tipagem de route
export const BookDetailedViewModel = ({route}: any): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [addingToFavorite, setAddingToFavorite] = useState(false);
  const [data, setData] = useState<IBookInfo>({
    title: '',
    author: '',
    description: '',
    publisher: '',
    subtitle: '',
    uri: '',
  });
  const [error, setError] = useState('');

  console.log('id' + JSON.stringify(route.params.id));

  const getBookDetail = useCallback((id: string) => {
    getById(id)
      .then(book => {
        console.log('book' + JSON.stringify(book));
        setData({
          title: book.volumeInfo?.title || '',
          subtitle: book.volumeInfo?.subtitle || '',
          author: book.volumeInfo?.authors ? book.volumeInfo?.authors[0] : '',
          publisher: book.volumeInfo?.publisher || '',
          description: book.volumeInfo?.description || '',
          uri: book.volumeInfo?.imageLinks?.thumbnail || '',
        });
      })
      .catch(() => setError('Ops, algo deu errado.'))
      .finally(() => setLoading(false));
  }, []);

  const handleFavoriteButton = useCallback(() => {
    setAddingToFavorite(true);
    favorite(route?.params?.id)
      .then(status => {
        console.log('status' + status);
      })
      .catch(favoriteError => console.log(favoriteError))
      .finally(() => {
        setAddingToFavorite(false);
      });
  }, [route?.params?.id]);

  useEffect(() => {
    getBookDetail(route?.params?.id);
  }, [getBookDetail, route?.params?.id]);

  return (
    <BookDetailedView
      loading={loading}
      errorMessage={error}
      bookInfo={data}
      addingToFavorite={addingToFavorite}
      handleFavoriteButton={handleFavoriteButton}
    />
  );
};
