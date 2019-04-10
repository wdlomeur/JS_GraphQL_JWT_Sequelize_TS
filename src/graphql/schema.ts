import { makeExecutableSchema } from 'graphql-tools';
import { merge } from  'lodash';

import { Mutation } from './mutation';
import { Query } from './query';


import { postTypes } from './resources/post/post.schema';
import { userTypes } from './resources/user/user.schema';
import { commentTypes } from './resources/comment/comment.schema';

import { userResolvers } from './resources/user/user.resolvers';
import { postResolvers } from './resources/post/post.resolvers';
import { commentResolvers } from './resources/comment/comment.resolvers';


const resolvers = merge(
    commentResolvers,
    postResolvers,
    userResolvers
);

const SchemaDefinition = `
type Schema {
    query: Query
    mutation: Mutation
}`;

export default makeExecutableSchema({ 
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        commentTypes,
        postTypes,
        userTypes
    ],
    resolvers
});
