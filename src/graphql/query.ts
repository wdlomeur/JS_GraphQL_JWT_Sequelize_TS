import { commnetQueries } from "./resources/comment/comment.schema";
import { postQueries } from "./resources/post/post.schema";
import { userQueries } from "./resources/user/user.schema";

const Query = `
    type Query {
        ${commnetQueries}
        ${postQueries}
        ${userQueries}
    }
`;

export {
    Query
}