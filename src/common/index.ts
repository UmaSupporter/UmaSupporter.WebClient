import { createContext } from "react"

export const baseUri = document.baseURI
export const UriContext = createContext(baseUri)
