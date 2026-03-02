const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        classroom_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roomNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        building: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hasProjector: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        classType: {
            type: DataTypes.ENUM('Regular', 'Lab', 'Art', 'Computer'),
            allowNull: true
        }
    };

    return sequelize.define('Classroom', attributes);
}