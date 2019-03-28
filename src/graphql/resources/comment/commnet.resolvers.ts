import { CommentAtributes } from './../../../models/CommentModel';
import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";

export const commentReserovers = {

    Commnet: {
        user: (comment, args, { db }: { db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.User
                .findById(comment.get('user'));
        }
    },
    Query: {
        commentsByPost: (parent, { postId, first = 10, offset = 0 }, { db }: { db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Comment
                .findAll({
                    where: { post: postId },
                    limit: first,
                    offset: offset
                });
        },

        post: (commnet, { postId, first = 10, offset = 0 }, { db }: { db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Post
                .findById(commnet.get('post'));
        },
    }
};