import { BaseModelInterface } from './../interfaces/BaseModelInterface';
import * as Sequelize from 'sequelize';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface PostAttributes {
    ud?: number;
    title?: string;
    content?: string;
    photo?: string;
    author?: number;
    createdAt?: string;
    updatedAt?: string;
}


export interface PostInstace extends Sequelize.Instance<PostAttributes>{}

export interface PostModel extends BaseModelInterface, Sequelize.Model<PostInstace, PostAttributes>{}

export default(sequelize: Sequelize.Sequelize, Datatype: Sequelize.DataTypes) : PostModel => {
    const Post: PostModel = sequelize.define('Post', {
        id: {
            type: Datatype.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Datatype.STRING,
            allowNull: false
        },
        content: {
            type: Datatype.STRING,
            allowNull: false
        },
        photo: {
            type: Datatype.BLOB({
                length: 'long'
            }),
            allowNull: false
        }
    },
    {
        tableName: 'posts'
    });

    Post.associate = (models: ModelsInterface): void => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        })
    }

    return Post;
};