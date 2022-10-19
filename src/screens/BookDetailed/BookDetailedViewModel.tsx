import React, {useCallback, useEffect} from 'react';
import {useState} from 'react';
import {getBookById} from '../../api/books/repositories/SearchBook';
import {BookDetailedView} from './BookDetailedView';
import {IBookInfo} from './types';

//TODO: Tipagem correta
export const BookDetailedViewModel = ({route, navigation}): JSX.Element => {
  const [loading, setLoading] = useState(true);
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

  const getBookDetail = useCallback(async (id: string) => {
    getBookById(id)
      .then(book => {
        console.log('book' + JSON.stringify(book));
        setData({
          title: book.volumeInfo?.title || '',
          subtitle: book.volumeInfo?.subtitle || '',
          author: book.volumeInfo?.authors ? book.volumeInfo?.authors[0] : '',
          publisher: book.volumeInfo?.publisher || '',
          description: book.volumeInfo?.description || '',
          uri: book.volumeInfo?.imageLinks?.large || '',
        });
      })
      .catch(() => setError('Ops, algo deu errado.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getBookDetail(route?.params?.id);
  }, [getBookDetail, route?.params?.id]);

  return (
    <BookDetailedView loading={loading} errorMessage={error} bookInfo={data} />
  );
};
