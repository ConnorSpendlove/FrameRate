const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rating : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_review : {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        game_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'game',
                key: 'id'
            }
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);