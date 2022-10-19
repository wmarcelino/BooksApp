import booksClient from '../../client';

import {IData, Item} from './types';

export const searchBook = async (
  serchText: string,
  index: number,
  maxResults: number,
) => {
  const {data} = await booksClient.get<IData>(
    `/volumes?q=${serchText}&startIndex=${index}&maxResults=${maxResults}&printType=books`,
  );
  return data;
};

export const getBookById = async (id: string) => {
  const {data} = await booksClient.get<Item>(`/volumes/${id}`);
  return data;
};
