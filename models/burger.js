module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        //constraints
        //columns
        burger_name: DataTypes.STRING,
        devoured: {
        type: DataTypes.BOOLEAN,
        "default value": false
    }
    });

    return Burger;
}