import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

import { devEndpoint, prodEndpoint } from '../constants'
import LOCAL_STATE_QUERY from '../graphql/queries/localState'

const createClient = ({ headers }) => {
    return new ApolloClient({
        uri:
            process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include'
                },
                headers
            })
        },
        // local data
        clientState: {
            resolvers: {
                Mutation: {
                    toggleLogin (_, variables, { cache }) {
                        // read the loginIsOpen value from the cache
                        const { loginIsOpen } = cache.readQuery({
                            query: LOCAL_STATE_QUERY
                        })
                        // write the login modal state to opposite
                        const data = {
                            data: { loginIsOpen: !loginIsOpen }
                        }
                        cache.writeData(data)
                        return data
                    }
                }
            },
            defaults: {
                loginIsOpen: false
            }
        }
    })
}

export default withApollo(createClient)
