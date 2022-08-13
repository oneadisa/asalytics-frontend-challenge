import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://analytics-api.herokuapp.com/analytics',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  <ApolloProvider client={client}>
  return <Component {...pageProps} />
 </ApolloProvider>
}

export default MyApp
