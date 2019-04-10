import { ModelsInterface } from './../interfaces/ModelsInterface';
import { CommentAtributes } from './CommentModel';
import { BaseModelInterface } from './../interfaces/BaseModelInterface';
import * as Sequelize from 'sequelize';

export interface CommentAtributes {
	id?: number;
	comment?: string;
	post?: number;
	user?: number;
	createdAd?: string;
	updatedAt?: string;
}

export interface CommentInstance extends Sequelize.Instance<CommentAtributes> {}

export interface CommentModel extends BaseModelInterface, Sequelize.Model<CommentInstance, CommentAtributes> {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): CommentModel => {
	const Comment: CommentModel = sequelize.define(
		'Comment',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			comment: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			tableName: 'comments',
		}
	);

    Comment.associate = (models: ModelsInterface): void => {
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false,
                field: 'post',
                name: 'post'
            }
        }),

        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'user',
                name: 'user'
            }
        });
    }

	return Comment;
};
