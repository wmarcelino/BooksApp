import React, {useCallback} from 'react';
import {FlatList, View, Image} from 'react-native';
import {IBookCard, SearchViewProps} from './types';
import {
  Card,
  CardTitle,
  Container,
  SearchInput,
  StyledActivityIndicator,
  CardAuthor,
  ErrorOrEmptyMessage,
} from './styles';

export const SearchView = ({
  loading,
  loadingMore,
  error,
  errorMessage,
  searchText,
  data,
  handleCardSelection,
  handleSearchTextChange,
  handleListEndReached,
}: SearchViewProps): JSX.Element => {
  const RenderItem = useCallback(
    (item: IBookCard) => {
      return (
        <Card onPress={() => handleCardSelection(item)}>
          <Image
            source={{
              uri: item.uri || 'https://via.placeholder.com/150',
              height: 150,
              width: 100,
            }}
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
      <View>
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
    <Container>
      <SearchInput
        placeholder="Pesquisar por livro"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />
      {loading && <StyledActivityIndicator />}
      {error && <ErrorOrEmptyMessage>{errorMessage || ''}</ErrorOrEmptyMessage>}

      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingBottom: 200}}
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
