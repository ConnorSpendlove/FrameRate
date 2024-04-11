const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User'); // Import the User model

class Post extends Model {}
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        gameTitle: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        hoursTaken: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        rating: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        review: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        userId: { // Renamed to follow Sequelize conventions
            type: DataTypes.INTEGER,
            references: {
                model: User, // Reference the User model
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

// Establish the association
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = Post;
