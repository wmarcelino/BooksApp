import React, {useEffect, useRef} from 'react';
import {useCallback, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {searchBook} from '../../api/books/repositories/SearchBook/index';
import {SearchView} from './SearchView';
import {IBookCard} from './types';

const MAX_RESULTS = 5;

//TODO: Tipagem correta
export const SearchViewModel = ({navigation: {navigate}}): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [searchTextDebounced] = useDebounce(searchText, 1000);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const indexRef = useRef(0);

  const [books, setBooks] = useState<IBookCard[]>([]);
  const [error] = useState(false);

  const updateBooks = useCallback(
    async (
      text: string,
      index: number,
      maxResults: number,
      fetchingMore: boolean,
    ) => {
      fetchingMore ? setLoadingMore(true) : setLoading(true);
      searchBook(text, index, maxResults)
        .then(data => {
          const newBooks = data.items?.map(item => ({
            id: item.id || '',
            author: item.volumeInfo?.authors ? item.volumeInfo?.authors[0] : '',
            title: item.volumeInfo?.title || '',
            description: item.volumeInfo?.description || '',
            uri: item.volumeInfo?.imageLinks?.thumbnail || '',
          }));
          if (newBooks && fetchingMore) {
            setBooks(previous => [...previous, ...newBooks]);
          } else {
            setBooks(newBooks || []);
          }
        })
        .catch(getError => console.log(getError))
        .finally(() => {
          setLoadingMore(false);
          setLoading(false);
        });
    },
    [],
  );

  useEffect(() => {
    if (searchTextDebounced.length > 0) {
      indexRef.current = 0;
      updateBooks(searchTextDebounced, 0, MAX_RESULTS, false);
    }
  }, [searchTextDebounced, updateBooks]);

  const handleSearchTextChange = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const handleListEndReached = useCallback(() => {
    console.log('end list reached');
    const newIndex = indexRef.current + MAX_RESULTS;
    indexRef.current = newIndex;
    console.log('newIndex' + newIndex);
    updateBooks(searchTextDebounced, newIndex, MAX_RESULTS, true);
  }, [searchTextDebounced, updateBooks]);

  const handleCardSelection = useCallback(
    (item: IBookCard) => {
      console.log('item id' + item.id);
      navigate('Detalhe', {id: item.id});
    },
    [navigate],
  );

  return (
    <SearchView
      loading={loading}
      error={error}
      searchText={searchText}
      loadingMore={loadingMore}
      data={books}
      handleCardSelection={handleCardSelection}
      handleSearchTextChange={handleSearchTextChange}
      handleListEndReached={handleListEndReached}
    />
  );
};
