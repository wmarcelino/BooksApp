export interface BookListProps {
  loading?: boolean;
  loadingMore?: boolean;
  error?: boolean;
  errorMessage?: string;
  searchText: string;
  data: IBookCard[];
  handleCardSelection: (bookCard: IBookCard) => void;
  handleListEndReached: () => void;
  handleSearchTextChange?: (searchText: string) => void;
}

export interface IBookCard {
  id: string;
  title: string;
  author: string;
  uri: string;
}
