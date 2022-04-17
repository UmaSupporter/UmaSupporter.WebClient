import { createContext } from 'react';

let production = process.env.NODE_ENV === 'production';
let uri;
let static_uri = 'https://dmtrl8synuu2z.cloudfront.net';
if (production) {
  uri = 'https://suppoter.sonagi.dev';
} else {
  uri = 'https://uma.hanaoto.me';
}

export const baseUri = uri;
export const UriContext = createContext(uri);
export const StaticUriContext = createContext(static_uri);
