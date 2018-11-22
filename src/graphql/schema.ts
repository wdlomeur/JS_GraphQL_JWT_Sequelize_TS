import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Jon',
        email: 'jon@email.com'
    },
    {
        id: 2,
        name: 'Dany',
        email: 'dany@email.com'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    }
    ,Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({id: users.length + 1}, args);
            users.push(newUser);
            return newUser;
        }
    }
    /*
    //implementação complexa do método allUseres
    //Quando implementado de forma explíssita, ele sobreescreve o método
    ,User: {
        id: (user) => user.id,
        name: (user) => 'WDLR',
        email: (user) => user.email
    }*/
};

export default makeExecutableSchema( { typeDefs, resolvers } );
