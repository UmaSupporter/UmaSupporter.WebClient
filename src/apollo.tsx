import { useContext } from "react";
import { UriContext } from "./common";

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

type Props = {
  children: JSX.Element
};

const UmaApolloProvider: React.FC<Props> = (props: Props) => {
  const uri = useContext(UriContext);

  const client = new ApolloClient({
    uri: `${uri}/graphql`,
    cache: new InMemoryCache()
  });

  return  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
}

export default UmaApolloProvider

