import {GOOGLE_ACCESS_TOKEN} from '../../../../tokens';
import booksClient from '../../client';

import {IData, Item} from './types';

const headers = {
  Authorization: GOOGLE_ACCESS_TOKEN,
};
export const search = async (
  serchText: string,
  index: number,
  maxResults: number,
) => {
  const {data} = await booksClient.get<IData>(
    `/volumes?q=${serchText}&startIndex=${index}&maxResults=${maxResults}&printType=books`,
  );
  return data;
};

export const getFavorites = async () => {
  const {data} = await booksClient.get<IData>(
    '/mylibrary/bookshelves/0/volumes?',
    {
      headers,
    },
  );
  return data;
};

export const getById = async (id: string) => {
  const {data} = await booksClient.get<Item>(`/volumes/${id}`);
  return data;
};

export const favorite = async (id: string) => {
  const {status} = await booksClient.post<number>(
    `/mylibrary/bookshelves/0/addVolume?volumeId=${id}&country=BR`,
    {},
    {
      headers,
    },
  );
  return status;
};

export const remove = async (id: string) => {
  const {status} = await booksClient.post<number>(
    `mylibrary/bookshelves/0/removeVolume?volumeId=${id}`,
    {},
    {
      headers,
    },
  );
  return status;
};
