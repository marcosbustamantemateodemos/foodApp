import gql from 'graphql-tag'
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-client-preset'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
});

class GraphQLService {

    static getAll = (query) => {

        return client
            .query({
                query: gql(`{` + query + `}`)
            })
            .then(result => {
                const queryName = query.split('{')[0];
                const { edges: list } = result.data[queryName];
                let listado = []; 

                list.forEach(element => {
                    listado.push(element['node']);
                });

                return listado;

            }).catch(err => console.log(err));
    }

    static post = (url, body) => {
        
        if (url !== undefined && body !== undefined) {

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }).then(response => response.json())
            .then(data => data)
            .catch(console.log);
        }
    }

    static put = (url, id, body) => {

        if (url !== undefined || id !== undefined || body !== undefined) {
        
            fetch(url + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }).then(response => response.json())
            .then(data => data)
            .catch(console.log);
        }
    }

    static delete = (url, id) => {
        
        if (url !== undefined || id !== undefined) {

            fetch(url + id, {
                method: 'DELETE'
            }).then(response => response.json())
            .then(data => data)
            .catch(console.log);
        }
    }

}

export default GraphQLService;