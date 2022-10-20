export interface BookDetailedViewProps {
  loading?: boolean;
  errorMessage?: string;
  bookInfo: IBookInfo;
  handleFavoriteButton: () => void;
  addingToFavorite: boolean;
}

export interface IBookInfo {
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  description: string;
  uri: string;
}
