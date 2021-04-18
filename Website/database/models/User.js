module.exports = (sequelize, dataType)=> {
const User =sequelize.define("User", 
{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: dataType.INTEGER
    },
    user_name:{
        allowNull: false,
        type: dataType.STRING
    },
    last_name: {
        allowNull: false,
        type: dataType.STRING
    },
    email: {
        allowNull: false,
        type: dataType.STRING
    },
    age:{
        allowNull: false,
        type: dataType.INTEGER
    },
    city: {
        allowNull: false,
        type: dataType.STRING
    },
    image:{
        allowNull: true,
        type: dataType.STRING
    },
<<<<<<< HEAD
    role_id:{
=======
     role_id:{
>>>>>>> 4eec4ebd30e4f39a86080303dfe64fa35d00c24e
        allowNull: false,
        type: dataType.INTEGER
    }
}, { 
    timestamps: false
});

User.associate = function (models){
    User.belongsTo(models.Role, {
        as:"role",
        foreignKey: "user_role_id"
    })
    User.hasMany(models.Cart)
}
return User;
};



    