import { createContext } from "react"

let production = process.env.NODE_ENV === 'production';
let uri;
if(production) {
  uri = 'https://uma.hitagi.moe'
}
else {
  uri = 'https://uma.hitagi.moe'
}
export const baseUri = uri
export const UriContext = createContext(uri)
