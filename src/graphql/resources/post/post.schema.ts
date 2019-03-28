const postTypes = `

    type Post {
        id: ID!
        title: String!
        content: String!
        photo: String!
        createdAt: String!
        updatedAt: String!
        author: User!
        comments( first: Int, offset: Int): [ Comment! ]!
    }

    input PostInput {
        title: String!
        content: String!
        photo: String!
        author: Int!
    }
`;

const postQueries = `
    posts(firts: Int, ofsset: Int): [ Post! ]!
    post(id: ID!): Post
`;

const postMutations = `
    createPost(Input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID): Boolean
`;

export  {
    postTypes,
    postQueries,
    postMutations
}