import { ModelsInterface } from './../interfaces/ModelsInterface';
import { UserInstance } from './UserModel';
import { BaseModelInterface } from './../interfaces/BaseModelInterface';
import * as Sequelize from 'sequelize'
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

export interface UserAttributes {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    photo?: string;
    createdAd?: string;
    updateAt?: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
    isPassword(encodedPassword: string, password: string): boolean;
}


export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes> {

}

//Na dúvida, olhar doc do Sequelize
export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): UserModel => {
    const User: UserModel = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        photo: {
            type: DataTypes.BLOB({
                length: 'long'
            }),
            allowNull: true,
            defaultValue: null
        }
    },
    {
        tableName: 'users',
        hooks: {
            beforeCreate: (user: UserInstance, options: Sequelize.CreateOptions): void => {
                const salt = genSaltSync();
                user.password = hashSync(user.password, salt);
            }
        }
    });

    //Associate herda da BaseModelInterface
    //Apenas referência
    //User.associate = (models: ModelsInterface): void => {};

    User.prototype.isPassword = (encodedPassword: string, password: string): boolean => {
        return compareSync(password, encodedPassword);
    };

    return User;
};