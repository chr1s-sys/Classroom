const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        actionType: { type: DataTypes.STRING, allowNull: false },
        actionDetails: { type: DataTypes.TEXT, allowNull: true },
        timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    };

    const options = {
        timestamps: false
    };

    return sequelize.define('ActivityLog', attributes, options);
}