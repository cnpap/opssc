import { TypedStorageService } from './store';

type $LocalStorage = {
  uid: string;
  token: string;
};

export const $local = new TypedStorageService<$LocalStorage>(localStorage);
