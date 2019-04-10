"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_resolvers_1 = require("./resources/comment/comment.resolvers");
const user_resolvers_1 = require("./resources/user/user.resolvers");
const post_resolvers_1 = require("./resources/post/post.resolvers");
const graphql_tools_1 = require("graphql-tools");
const lodash_1 = require("lodash");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const comment_schema_1 = require("./resources/comment/comment.schema");
const post_schema_1 = require("./resources/post/post.schema");
const user_schema_1 = require("./resources/user/user.schema");
const resolvers = lodash_1.merge(comment_resolvers_1.commentResolvers, post_resolvers_1.postResolvers, user_resolvers_1.userResolvers);
const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation  
    }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        query_1.Query,
        mutation_1.Mutation,
        comment_schema_1.commentTypes,
        post_schema_1.postTypes,
        user_schema_1.userTypes
    ],
    resolvers
});
