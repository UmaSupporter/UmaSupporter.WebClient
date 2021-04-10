import { createContext } from 'react';

let production = process.env.NODE_ENV === 'production';
let uri;
if (production) {
  uri = 'https://uma.hitagi.moe';
} else {
  uri = 'http://localhost:5000';
}
export const baseUri = uri;
export const UriContext = createContext(uri);
