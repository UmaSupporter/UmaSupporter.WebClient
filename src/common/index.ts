import { createContext } from 'react';

let production = process.env.NODE_ENV === 'production';
let uri;
if (production) {
  uri = 'https://suppoter.sonagi.dev';
} else {
  uri = 'https://uma.hanaoto.me';
}
export const baseUri = uri;
export const UriContext = createContext(uri);
