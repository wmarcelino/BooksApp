import React, {useCallback} from 'react';
import {FlatList, View, Image} from 'react-native';
import {IBookCard, BookListProps} from './types';
import {
  Card,
  CardTitle,
  Container,
  SearchInput,
  StyledActivityIndicator,
  CardAuthor,
  ErrorOrEmptyMessage,
} from './styles';

export const BookList = ({
  loading,
  loadingMore,
  error,
  errorMessage,
  searchText,
  data,
  handleCardSelection,
  handleSearchTextChange,
  handleListEndReached,
}: BookListProps): JSX.Element => {
  const RenderItem = useCallback(
    (item: IBookCard) => {
      console.log(item.uri);
      return (
        <Card testID="book-list-card" onPress={() => handleCardSelection(item)}>
          <Image
            source={{
              uri:
                item.uri.replace('http', 'https') ||
                'https://via.placeholder.com/150',
              height: 150,
              width: 100,
            }}
            style={{height: 150, width: 150}}
            resizeMode={'cover'}
          />
          <View>
            <CardTitle>{item.title}</CardTitle>
            <CardAuthor>{item.author}</CardAuthor>
          </View>
        </Card>
      );
    },
    [handleCardSelection],
  );

  const RenderEmptyList = useCallback(() => {
    return (
      <View testID="book-list-empty">
        <ErrorOrEmptyMessage>
          {searchText.length > 0 && !loading
            ? 'Ops, não foram encontrados resultados'
            : ''}
        </ErrorOrEmptyMessage>
      </View>
    );
  }, [searchText, loading]);

  const RenderFooterComponent = useCallback(() => {
    if (loadingMore) {
      return <StyledActivityIndicator />;
    }
    return <></>;
  }, [loadingMore]);

  return (
    <Container testID="book-list">
      {handleSearchTextChange && (
        <SearchInput
          placeholder="Pesquisar por livro"
          onChangeText={handleSearchTextChange}
          value={searchText}
        />
      )}

      {loading && <StyledActivityIndicator testID="book-list-loading" />}
      {error && (
        <ErrorOrEmptyMessage testID="book-list-error-or-empty">
          {errorMessage || ''}
        </ErrorOrEmptyMessage>
      )}

      <FlatList
        testID="book-list-content-data"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingTop: 16, paddingBottom: 200}}
        data={data}
        renderItem={({item}) => RenderItem(item)}
        ListEmptyComponent={RenderEmptyList}
        onEndReached={handleListEndReached}
        ListFooterComponent={RenderFooterComponent}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
