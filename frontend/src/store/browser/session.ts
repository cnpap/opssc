import { TypedStorageService } from './store';

type $SessionStorage = {};

// noinspection JSUnusedGlobalSymbols
export const $session = new TypedStorageService<$SessionStorage>(sessionStorage);
