export interface BookDetailedViewProps {
  loading?: boolean;
  errorMessage?: string;
  bookInfo: IBookInfo;
}

export interface IBookInfo {
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  description: string;
  uri: string;
}
