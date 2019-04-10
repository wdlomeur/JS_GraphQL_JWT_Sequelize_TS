"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, Datatype) => {
    const Post = sequelize.define('Post', {
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
    }, {
        tableName: 'posts'
    });
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        });
    };
    return Post;
};
