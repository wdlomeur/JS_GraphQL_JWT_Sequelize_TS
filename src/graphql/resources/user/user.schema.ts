const userTypes = `
    # User definition type    
    type User {
        # Id do usuário
        id: ID!
        # Nome do usuário
        name: String!
        # E-mail do usuário
        email: String!
        # Foto é opcional ao criar um perfil, mas obrigatório na postagem
        photo: String
        # Data de criação
        createdAt: String!
        # Data da ultima atualização
        updatedAt: String!
    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdateInput {
        name: String!
        email: String!
        photo: String!
    }

    input UserUpdatePasswordInput {
        password: String!
    }
`;


const userQueries = `
    users(first: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    updateUserPassword(id: ID, input: UserUpdatePasswordInput!): Boolean
    deleteUser(id: ID!):  Boolean
`;

export  {
    userTypes,
    userQueries,
    userMutations
}